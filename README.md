# Using Docker
Notes on using docker for everyday development

## Commonly use commands

Login [DockerHub](https://hub.docker.com/), create an account first   
`docker login`

`docker run -d -p 8080:80 --name web1 tutum/hello-world`  
Start a brand new docker container in detached mode, 
map docker container's port 80 to a public access port 8080  

This will download an image from docker hub if necessary.

`docker run tutum/hello-world`  
Start a docker container in attached mode.

`docker start [name|id]`  
`docker stop [name|id]`  
`docker ps -a`  
`docker rm [name|id]`  


