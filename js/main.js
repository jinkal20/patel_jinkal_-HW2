(function function_name (argument) {
	"use strict";
	console.log("file connected");
// single line comment


	//var string="This is string of variable";
	//var num=1;
	//console.log(string);
	//console.log("Number  of times of visited"+num);
	//var array = ["Knigts","Caps","Leafs"];
	//console.log(array);

	var iconSet = document.querySelectorAll(".icons");
	console.log(iconSet);

	/*function i_am_funtion (argument) {
		console.log("from i am function");
	}
	window.addEventListener("load",i_am_funtion, false);
 	*/


	function logloaded(evt){
		//console.log("svg loaded");
		//console.log(evt);
		var targetSVG = evt.currentTarget.contentDocument;
		//console.log(targetSVG);
		var theIcon = targetSVG.querySelector(".mainIcon");
		//console.log(theIcon);
		theIcon.addEventListener("click",logClicked,false);
	}

	function logClicked(evt){
		console.log(evt.currentTarget.id);
	}


	for(var i=0; i<iconSet.length; i++){
		//console.log(i);
		iconSet[i].addEventListener("load",logloaded,false);
	}
})();

