alexte/speedtest
================

Speedtest is a very simple web service to test download performance.

It is based on nodejs and express.

HOWTO
-----

You need a server with node.js to run this service.

```
> npm install 
> node speedtest.js -h
Usage: node speedtest.js

  -l, --bindaddress=ARG  Listen to this IP (any)
  -p, --port=ARG         Listen to this TCP Port (8081)
  -h, --help             display this help

> node speedtest.js
Listening on 0.0.0.0:8081

```

If you want to start alexte/speedtest in background at system start consider using "screen", "forever"
(http://blog.nodejitsu.com/keep-a-nodejs-server-up-with-forever/), or "docker"


#### Start in background with "forever"
```
> npm install -g forever
> npm install
> forever start speedtest.js
```

Check or stop the service:
```
> forever list
> forever stop speedtest.js
```

#### Using speedtest in docker

Thank you to shadiakiki1986 for providing a Dockerfile.

```
> docker build -t speedtest .
> docker run -d -p 8081:8081 speedtest

```

To publish to a different port than the default 8081

```
> docker run -d -p 8888:8081 speedtest
```

A dockerfile is also published [here](https://hub.docker.com/r/shadiakiki1986/speedtest/). To use it:

```
> docker run -d -p 8081:8081 shadiakiki1986/speedtest:shadi_add_dockerfile
```

