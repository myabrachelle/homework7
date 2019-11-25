$("#useBilling").click(function(){
	if (this.checked){
		console.log("selected and displays same address for both home and billing")
		$("#home").val($("#billing").val());
		$("#home").prop("disabled", true)
	}

	else{
		console.log("not selected")
		$("#home").value = "";
		$("#home").prop("disabled", false)
	}
});
