package upb.pweb.mailsender;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MailSenderApplication {
    public static final String alertsQueueName = "alerts-queue";

    public static void main(String[] args) {
        SpringApplication.run(MailSenderApplication.class, args);
    }

}
