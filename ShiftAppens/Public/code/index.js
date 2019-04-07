"use strict";
const host = 'https://keystrokestestesecenas.netlify.com/';
// Port we are connecting on

(function()
{
	window.addEventListener("load", main);
}());

function main(){
	var start=document.getElementById("yes-drop");
	clientResponse(start);
}

//	Outer function to send responses to the server
function clientResponse(start){
	start.addEventListener('click',(e)=>{
		sendInfo(e);
	});
}

//	Main function that creates and 
//	sends the json file with the nick
function sendInfo(e){ //	todo: create text box and send nick to json
	$.ajax({
		url: "/",
		type: 'POST',
		contentType: 'application/json',
		//	data gets 3 parameters:
		//		client nick (name)
		//		success function
		//		fail function
		data: JSON.stringify({name: "viewedProfiles"}),
						success:	function(response)
								{console.log(response)},
						error:	function (xhr, ajaxOptions, thrownError)
							{if(xhr.status==404) {alert(thrownError);}}
	});
}
