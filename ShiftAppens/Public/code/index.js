"use strict";
const host = 'https://keystrokestestesecenas.netlify.com/';
	// Port we are connecting on

(function()
{
	window.addEventListener("load", main);
}());

function main(){
  console.log("Hello world");
	post_stuff();
}

function post_stuff(){
	$.ajax({
	        url: host,
	        type: 'POST',
	        contentType: 'application/json',
	        data: JSON.stringify({name: "viewedProfiles"}),
	        success: function(response){ console.log(response)}
});
}
