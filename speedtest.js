
var fs = require('fs');

var express = require('express');
var app = express();

app.use(function(err, req, res, next){
  	console.log("error: "+err.stack);
  	res.status(500).send('Something broke!');
});

app.get('/',function(req,res) {
    res.sendFile(__dirname+"/index.html");
    console.log("Incoming Request from "+req.connection.remoteAddress);
});

app.get('/blob/:size',function (req,res) {
    var size=req.params.size;
    if (!size || size<=0) size=1;
    for (var i=0;i<size;i++) res.write(blob);
    res.end();
});

var blob=new Buffer(1024*1024);

  	// ---------- initialize random blob 
fs.open("/dev/urandom","r",function (err,fd) {
  fs.readSync(fd,blob,0,1024*1024,0);
});

var listen="0.0.0.0";
var port="8081";

opt=require('node-getopt').create([
        ["l","bindaddress=ARG","Listen to this IP (any)"],
        ["p","port=ARG","Listen to this TCP Port (8081)"],
        ['h','help','display this help']
]).bindHelp().parseSystem();

if (opt.options.bindaddress) listen=opt.options.bindaddress;
if (opt.options.port) port=opt.options.port;

var server = app.listen(port,listen, function() {
    console.log('Listening on %s:%d', listen, server.address().port);
});
