To run mongodb easily locally

`docker run -p 27017:27017 --name mongodb -d mongo:latest`

If you want to run commands in the container you can run:

`docker exec -it mongodb bash`
