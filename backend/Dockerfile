FROM openjdk:17
LABEL maintainer="Shreyash Chatterjee"
WORKDIR /backend/
COPY . .
RUN ./mvnw package
#ADD target/AnilistReader-0.0.1-SNAPSHOT.jar AnilistReader-docker.jar
ENTRYPOINT ["java", "-jar", "target/AnilistReader-0.0.1-SNAPSHOT.jar"]