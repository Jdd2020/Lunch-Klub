# Use Maven to build the app
FROM maven:3.9-eclipse-temurin-17 AS build
WORKDIR /app
COPY api/pom.xml api/
COPY api/src/ api/src/
RUN mvn -f api/pom.xml clean package -DskipTests

# Use JDK base image to run the built app
FROM eclipse-temurin:17-jdk
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
