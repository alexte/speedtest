FROM node:alpine
WORKDIR /code
COPY . .
RUN npm install
ENTRYPOINT ["node","speedtest.js"]
