FROM openjdk:17
LABEL maintainer="Shreyash Chatterjee"
ADD target/AnilistReader-0.0.1-SNAPSHOT.jar AnilistReader-docker.jar
ENTRYPOINT ["java", "-jar", "AnilistReader-docker.jar"]