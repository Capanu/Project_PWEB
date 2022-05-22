package upb.pweb.warzonehelpapp.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Service;
import upb.pweb.warzonehelpapp.WarzoneHelpApplication;
import upb.pweb.warzonehelpapp.model.Alert;

import java.text.SimpleDateFormat;

@Service
@Slf4j
@RequiredArgsConstructor
public class AlertQueuePublisherService {
    private final RabbitTemplate rabbitTemplate;

    public void publishAlert(Alert alert) throws JsonProcessingException, JSONException {
        // Convert the object to a json formatted string
        JSONObject jsonAlert = new JSONObject(new ObjectMapper().writeValueAsString(alert));

        // Send the date formatted
        String formattedDate = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss").format(alert.getOccurrenceDate());
        jsonAlert.put("occurrenceDate", formattedDate);

        log.info("SEND ALERT TO RABBITMQ");

        rabbitTemplate.convertAndSend(WarzoneHelpApplication.directExchangeName, WarzoneHelpApplication.alertsQueueRoutingKey, jsonAlert.toString());
    }
}
