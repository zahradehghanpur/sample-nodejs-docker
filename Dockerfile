FROM node:latest
ADD . .

EXPOSE 300

CMD node app.js