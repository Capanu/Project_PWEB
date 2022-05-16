package upb.pweb.warzonehelpapp.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class EmailSenderService {
    private final JavaMailSender mailSender;

    @Async
    public void sendSimpleEmail(String toEmail,
            String body,
            String subject) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("warzoneapphelper@admin.com");
        message.setTo(toEmail);
        message.setText(body);
        message.setSubject(subject);

        mailSender.send(message);
    }
}
