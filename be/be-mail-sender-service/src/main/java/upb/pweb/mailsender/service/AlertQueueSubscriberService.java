package upb.pweb.mailsender.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;
import upb.pweb.mailsender.MailSenderApplication;
import upb.pweb.mailsender.model.User;
import upb.pweb.mailsender.service.base.UserService;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
@RequiredArgsConstructor
public class AlertQueueSubscriberService {
    private final UserService userService;
    private final EmailSenderService emailSenderService;

    @RabbitListener(queues = MailSenderApplication.alertsQueueName)
    public void receiveAlert(String jsonAlert) throws JSONException {
        JSONObject alert = new JSONObject(jsonAlert);

        // Grab all users
        List<User> users = userService.findAll();

        // Grab only residents and volunteers
        List<User> residentsAndVolunteers = users.stream().filter(user ->
                user.getRole().getName().equals("VOLUNTEER") || user.getRole().getName().equals("RESIDENT"))
                .collect(Collectors.toList());

        // Compute email message
        String message = alert.getString("description") + "\n" + "Occurrence date: " + alert.getString("occurrenceDate");

        // Compute email subject
        String degreeOfImportance = alert.getJSONObject("degreeOfImportance").getString("name");
        String alertName = alert.getString("name");

        String subject = "[" + degreeOfImportance + "] " + alertName;

        for (User u : residentsAndVolunteers) {
            emailSenderService.sendSimpleEmail(u.getEmail(), message, subject);
        }
    }
}
