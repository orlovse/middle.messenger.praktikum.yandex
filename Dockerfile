FROM ubuntu:latest
RUN apt update && apt install -y nodejs && apt install -y npm 
WORKDIR /var/www
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "server.js" ]
