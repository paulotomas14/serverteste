"use strict";
const host = 'https://keystrokestestesecenas.netlify.com/';
	// Port we are connecting on
const port = 1337;

const socket = new jSocket();


(function()
{
	window.addEventListener("load", main);
}());

function main(){
  console.log("Hello world");
	ListenForData();
};


ListenForData(){
	// When the socket is added the to document
	socket.onReady = function(){
					socket.connect(host, port);
	}

	// Connection attempt finished
	socket.onConnect = function(success, msg){
					if(success){
									// Send something to the socket
									socket.write('Hello world');            
					}else{
									alert('Connection to the server could not be estabilished: ' + msg);
					}
	}
	socket.onData = function(data){
					alert('Received from socket: '+data);
	}

	// Setup our socket in the div with the id="socket"
	socket.setup('mySocket');
}
