package upb.pweb.warzonehelpapp;

import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.core.Queue;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@Slf4j
public class WarzoneHelpApplication {
    public static final String alertsQueueName = "alerts-queue";
    public static final String alertsQueueRoutingKey = "new.alert";
    public static final String directExchangeName = "direct-exchange";

    @Bean
    Queue alertQueue() {
        log.info("CREATE QUEUE");
        // Create the queue
        return new Queue(alertsQueueName, false);
    }

    @Bean
    DirectExchange exchange() {
        log.info("CREATE EXCHANGE");
        // Create the router (direct) -> each message will be routed to only one queue
        // based on the routingKey (no wildcards allowed)
        return new DirectExchange(directExchangeName);
    }

    @Bean
    Binding alertBinding(Queue alertQueue, DirectExchange exchange) {
        log.info("CREATE BIND BETWEEN QUEUE AND EXCHANGE");
        // Bind the queue to a specified route based on the routing key
        return BindingBuilder.bind(alertQueue).to(exchange).with(alertsQueueRoutingKey);
    }

    public static void main(String[] args) {
        SpringApplication.run(WarzoneHelpApplication.class, args);
    }

}
