package upb.pweb.warzonehelpapp.service.base;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import upb.pweb.warzonehelpapp.controller.internal_api.resources.BasicSuccessResponse;
import upb.pweb.warzonehelpapp.controller.internal_api.resources.NewAlertRequest;
import upb.pweb.warzonehelpapp.exception.BaseException;
import upb.pweb.warzonehelpapp.exception.InvalidDegreeOfImportanceException;
import upb.pweb.warzonehelpapp.model.Alert;
import upb.pweb.warzonehelpapp.model.DegreeOfImportance;
import upb.pweb.warzonehelpapp.repository.AlertRepository;
import upb.pweb.warzonehelpapp.repository.DegreeOfImportanceRepository;

import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class AlertService {
    private final AlertRepository repository;
    private final DegreeOfImportanceRepository degreeOfImportanceRepository;

    private final UserService userService;

    public DegreeOfImportance findDegreeOfImportanceByName(String name) throws BaseException {
        return degreeOfImportanceRepository.findByName(name).orElseThrow(() ->
                new InvalidDegreeOfImportanceException(name));
    }

    public BasicSuccessResponse newAlert(NewAlertRequest request) throws BaseException {
        DegreeOfImportance degreeOfImportance = findDegreeOfImportanceByName(request.getDegreeOfImportance());

        Alert newAlert = Alert.builder()
                .name(request.getName())
                .description(request.getDescription())
                .occurrenceDate(request.getOccurrenceDate())
                .degreeOfImportance(degreeOfImportance)
                .build();

        repository.save(newAlert);

        userService.alertResidentsAndVolunteers(newAlert);

        return new BasicSuccessResponse();
    }

    public List<Alert> listAllAlerts() {
        return repository.findAll();
    }
}
