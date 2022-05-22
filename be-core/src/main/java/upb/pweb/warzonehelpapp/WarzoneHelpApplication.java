package upb.pweb.warzonehelpapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class WarzoneHelpApplication {
    public static final String alertsQueueRoutingKey = "new.alert";
    public static final String directExchangeName = "direct-exchange";

    public static void main(String[] args) {
        SpringApplication.run(WarzoneHelpApplication.class, args);
    }
}
