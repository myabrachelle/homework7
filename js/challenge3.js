// In Challenge 3, this time make sure that at least 
// one element from both sets of radio buttons is selected.

$("#ch3form").click(function(){
    var fruit = $('input[name="fruit"]')
    fruit.each(function(){
        if (fruit.checked)
            return true;
    })
    
    alert("You must pick a fruit!")
    return false;
});



// ch3form.onsubmit = function() {
//     var fruit = 
//     document.querySelectorAll('input[name="fruit"]')


//     for (let i = 0; i < fruit.length;i++){
//         if (fruit[i].checked)
//             return true;
//     }

//     alert("You must pick a fruit!")
//     return false;
// };


    // useBilling.onchange = function() {
    //     let home = document.querySelector("#home");
    //     if (this.checked){
    //         home.value = document.querySelector("#billing").value;
    //         home.disabled = true;}
    //     else {
    //         home.value = "";
    //         home.disabled = false;}
        
    //     }

    // $("#useBilling").click(function(){
    //     if (this.checked){
    //         console.log("selected and displays same address for both home and billing")
    //         $("#home").val($("#billing").val());
    //         $("#home").prop("disabled", true)
    //     }
    
    //     else{
    //         console.log("not selected")
    //         $("#home").value = "";
    //         $("#home").prop("disabled", false)
    //     }
    // });



    // Advanced Answer
    // if(document.querySelector('input[name="fruit"]:checked'))
    //     return true;
    
    // alert("You must pick a fruit!")
    // return false;
//   }