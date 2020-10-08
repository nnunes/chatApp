#FROM openjdk:10-jre-slim
#COPY ./target/chat-0.0.1-SNAPSHOT.jar /usr/src/chat/
#WORKDIR /app
#COPY . ./
#EXPOSE 8080
#CMD ["java", "-jar", "target/chat-0.0.1-SNAPSHOT.jar"]

FROM maven:3.5.4-jdk-10-slim
WORKDIR /usr/src/java-code
COPY . /usr/src/java-code/
RUN mvn package

WORKDIR /usr/src/java-app
RUN cp /usr/src/java-code/target/*.jar ./app.jar
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]