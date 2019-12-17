# dummy Node js app with mongo-db dependency
- https://medium.com/@xoor/dockerizing-a-node-js-and-mongodb-app-f9d80fdb280e
- https://github.com/mpayetta/express-node-docker

# how-to:
install npm express package globaly: 
- `sudo npm install -g express`
- `sudo npm install -g express-generator`

prepare nodejs project: `express dummy-app`
- copy dummy-app source files to dockerized-app folder.
...

# build docker image:
docker build -t dummy-app .

# start dockerized-dummy-app:
docker run -p 3000:3000 -ti dummy-app
or
docker-compose up --build

follow steps:
call: http://localhost:3000/
