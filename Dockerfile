FROM node:alpine
RUN npm i -g forever
WORKDIR /code
COPY . .
RUN npm i
ENTRYPOINT forever start -l /tmp/speedtest.log speedtest.js && tail -f /tmp/speedtest.log
