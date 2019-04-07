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

	$.ajax(function(){
		setTimeout(function() {
        $(this).attr('disabled', false);
        $(this).val('Submit');
    }, 4000);
	},
	{
					url: '/',
					type: 'POST',
					contentType: 'application/json',
					data: JSON.stringify({name: "viewedProfiles"}),
					success: function(response){ console.log(response)},
					failure: function(err){console.log(err)}

	});
		console.log("bateu");

}
