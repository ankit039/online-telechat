var express = require('express');
var socket = require('socket.io');
var app = express();
var server = app.listen(process.env.PORT || 39,function(){
	//console.log("The Server is listeningto port 39");	
});

app.use(express.static('public'));

var io =socket(server);
io.on('connection',function(socket){
	
	//console.log(socket.id);
	
	socket.on("chat",function(data){
		//console.log(data)
		io.sockets.emit("chat",data);
	});
	
	socket.on("typing",function(data){
		io.sockets.emit("typing",data);
	});
});
