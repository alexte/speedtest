
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

fs.open("/dev/urandom","r",function (err,fd) {
  fs.readSync(fd,blob,0,1024*1024,0);
  console.log("Random Blob initialized");
});

var server = app.listen(8081, function() {
    console.log('Listening on port %d', server.address().port);
});
