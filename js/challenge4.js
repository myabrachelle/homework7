$("#ch4form").click(function(){
    var validInput = true;
    var name = $("#fullname").val();
    var address = $("#streetaddr").val();

    if (name.length == 0){
        $("#nameerrormsg").css("display", "block");
        validInput = false;
        console.log("pop up error message for name")
    }
    else{
        $("#nameerrormsg").css("display", "none")
    }

    if(address.length == 0){
        $("#addrerrormsg").css("display", "block");
        validInput = false;
        console.log("pop up error message for address")

    }
    else{
        $("#addrerrormsg").css("display", "none");
    }
    
    return validInput;
});