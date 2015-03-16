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

If you want to start alexte/speedtest in background at system start consider using "screen" or "forever"
(http://blog.nodejitsu.com/keep-a-nodejs-server-up-with-forever/). 
