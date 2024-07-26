FROM eclipse-temurin:17-jdk-alpine

LABEL authors="mobotronst"

VOLUME /tmp

COPY target/spring-sec-lirice-0.0.1-SNAPSHOT.jar lirice.jar

ENTRYPOINT ["java", "-jar", "/lirice.jar"]