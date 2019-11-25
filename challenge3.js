// In Challenge 3, this time make sure that at least 
// one element from both sets of radio buttons is selected.

$("#ch3form").click(function(){
    var fruit = $('input[name="fruit"]')
    var classStanding = $('input[name="standing"]')
    
    fruit.each(function(){
        console.log("1st level");
        if (this.is("checked")) {
            console.log("2nd level");
            return true;
        }     
    })

    classStanding.each(function(){
        if (this.is("checked")){
            return true;
        }
    })
    
    alert("You must pick a class standing or a fruit!")
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



    // Advanced Answer
    // if(document.querySelector('input[name="fruit"]:checked'))
    //     return true;
    
    // alert("You must pick a fruit!")
    // return false;
//   }