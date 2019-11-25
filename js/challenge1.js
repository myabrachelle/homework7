$("#subscribe").click(function(){
	if (this.checked){
		console.log("Selected")
		$("#emailField").css("display", "block");
	}
	else{
		console.log("Not selected")
		$("#emailField").css("display", "none")
	}
  });


  // toggle states that if it was block, make it none and if it was none then make it block (using method below):

//   $("#subscribe").click(function(){
// 		$("emailField").toggle("slow"); // slow is a keyword that 
//   });

// subscribe.onchange = function() {
// 	var x = document.querySelector("#emailField");
// 	if (this.checked){
// 		console.log("selected");
//     	x.style.display = "block";
//   	} else {
//   		console.log("Not selected");
//     	x.style.display = "none";
//   	}
//   // 	Advanced Option....
//   // 	x.style.display == "block" ? 
// 		// x.style.display = "none" : 
// 		// x.style.display = "block"; 
// }

