# Dockerizing [Weather Teller](https://github.com/ac-hj/weather-teller) ⛅️

Followed this [tutorial](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/) for dockerizing node.js app !

## Motivation 
After encountering the word "docker" *many many* times throughout my internship last summer, I was extremely curious what docker was. Reading through various documents about dockers gave me some idea, but as usual, I thought doing some hands-on practice would be much more beneficial in learning why docker is so popular today.

After going through the entire [tutorial](https://docs.docker.com/get-started/) provided by Docker, I dockerized this simple weather app that I recently created based on what I learned with the tutorial. 

## How to use
Run the following commands in the terminal ! Make sure you have docker

` docker build -t weather-docker . `

` docker run -p 8080:8080 -d weather-docker `

Then go to http://localhost:8080/ on your browser :)

## Next Steps
- [ ] Learn how to use secrets to store sensitive info



