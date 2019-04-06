"use strict";

(function()
{
	window.addEventListener("load", main);
}());

function main(){
  console.log("Hello world");
	window.addEventListener('message',(e)=>{
		messageListener(e);
	});
}

function messageListener(e){

};
