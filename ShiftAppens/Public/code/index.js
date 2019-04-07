"use strict";
const host = 'https://keystrokestestesecenas.netlify.com/';
	// Port we are connecting on

(function()
{
	window.addEventListener("load", main);
}());

function main(){
  console.log("Hello world");
	var start=document.getElementById("yes-drop");
	post_stuff(start);
}

function post_stuff(start){
	start.addEventListener('click',(e)=>{
		funcao_teste(e);
	});

}

function funcao_teste(e){

	$.ajax(
	{
					url: "/",
					type: 'POST',
					contentType: 'application/json',
					'X-Requested-With': 'XMLHttpRequest',
					data: JSON.stringify({name: "viewedProfiles"}),
					success: function(response){
						 console.log(response)},
					error:function (xhr, ajaxOptions, thrownError){
	     if(xhr.status==404) {
	         alert(thrownError);
	     }
	 }
	});

		console.log("bateu");

}
