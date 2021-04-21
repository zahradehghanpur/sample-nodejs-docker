FROM node:latest
ADD . .

RUN npm install express
EXPOSE 300

CMD node app.js