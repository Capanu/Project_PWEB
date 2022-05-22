FROM gradle:7.4.2-jdk17-alpine AS build

COPY --chown=gradle:gradle ./be-mail-sender-service /home/gradle/src
WORKDIR /home/gradle/src
RUN gradle build --no-daemon -x test

FROM openjdk:17-alpine

RUN mkdir /app

COPY --from=build /home/gradle/src/build/libs/mailsender-0.0.1-SNAPSHOT.jar /app/mailsender.jar

ENTRYPOINT java -jar /app/mailsender.jar --spring.profiles.active=prod --db.ip=$DB_ADDRESS --db.port=$DB_PORT --db.name=$DB_NAME --db.username=$DB_USERNAME --db.password=$DB_PASSWORD --spring.rabbitmq.host=$RABBITMQ_HOST --spring.rabbitmq.port=$RABBITMQ_PORT
