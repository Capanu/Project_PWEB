FROM openjdk:15-jdk-alpine

# This is not building. This is only taking the final product, without the compilation part.
COPY be/build/libs/warzonehelpapp-0.0.1-SNAPSHOT.jar warzonehelpapp-0.0.1-SNAPSHOT.jar

EXPOSE 8075

ENTRYPOINT java -jar /warzonehelpapp-0.0.1-SNAPSHOT.jar --spring.profiles.active=prod --db.ip=$DB_ADDRESS --db.port=$DB_PORT --db.name=$DB_NAME --db.username=$DB_USERNAME --db.password=$DB_PASSWORD
