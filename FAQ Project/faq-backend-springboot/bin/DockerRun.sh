docker container kill $(docker ps -q)

docker container prune -a yes

docker rmi $(docker images -q) --force

docker run -d -p 8071:80 rakimsv/proper-project:latest