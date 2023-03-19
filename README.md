#  Dockerised Node Server and React client for CurrenSee

## CurrenSee
CurrenSee is a web application that allows you to track currency exchange rates and view their history. With CurrenSee, you can stay informed about the latest exchange rates and easily visualize historical trends.

## Quick Start
```bash
# Run in Docker
docker-compose up

# Run in Docker in background mode
docker-compose up -d

# Tear down
docker-compose down

# To re-build
docker-compose build

# To run by docker composer
docker-compose -f ./docker-compose.yml up --build
```

## CurrenSee-Api
#### Port: 3005
#### Swagger: 3005/api-docs

## CurrenSee-Client
#### Port: 3000
