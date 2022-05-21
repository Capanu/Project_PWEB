package upb.pweb.warzonehelpapp.service.base;

import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONException;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Service;
import upb.pweb.warzonehelpapp.WarzoneHelpApplication;
import upb.pweb.warzonehelpapp.controller.internal_api.resources.BasicSuccessResponse;
import upb.pweb.warzonehelpapp.controller.internal_api.resources.NewAlertRequest;
import upb.pweb.warzonehelpapp.exception.BaseException;
import upb.pweb.warzonehelpapp.exception.InvalidDegreeOfImportanceException;
import upb.pweb.warzonehelpapp.model.Alert;
import upb.pweb.warzonehelpapp.model.DegreeOfImportance;
import upb.pweb.warzonehelpapp.repository.AlertRepository;
import upb.pweb.warzonehelpapp.repository.DegreeOfImportanceRepository;
import upb.pweb.warzonehelpapp.service.AlertQueuePublisherService;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class AlertService {
    private final AlertRepository repository;
    private final DegreeOfImportanceRepository degreeOfImportanceRepository;

    private final AlertQueuePublisherService alertQueuePublisherService;

    public DegreeOfImportance findDegreeOfImportanceByName(String name) throws BaseException {
        return degreeOfImportanceRepository.findByName(name).orElseThrow(() ->
                new InvalidDegreeOfImportanceException(name));
    }

    public BasicSuccessResponse newAlert(NewAlertRequest request) throws BaseException, JsonProcessingException, JSONException, ParseException {
        DegreeOfImportance degreeOfImportance = findDegreeOfImportanceByName(request.getDegreeOfImportance());

        // Format date
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date date1 = formatter.parse(request.getOccurrenceDate());

        Alert newAlert = Alert.builder()
                .name(request.getName())
                .description(request.getDescription())
                .occurrenceDate(date1)
                .degreeOfImportance(degreeOfImportance)
                .build();

        newAlert = repository.save(newAlert);

        // Publish the alert to the queue
        alertQueuePublisherService.publishAlert(newAlert);

        return new BasicSuccessResponse();
    }

    public List<Alert> listAllAlerts() {
        return repository.findAll();
    }
}
