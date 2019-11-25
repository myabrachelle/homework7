// In Challenge 3, this time make sure that at least 
// one element from both sets of radio buttons is selected.

$("#ch3form").submit(function(){

    var fruitchecking = $('input[name=fruit]:checked')
    var standingchecking = $('input[name=standing]:checked')
    console.log(fruitchecking.val())

    if(fruitchecking.val() == undefined && standingchecking.val() == undefined){
        console.log(fruitchecking.val())
        console.log(standingchecking.val())
        alert("You must pick a class standing or a fruit!")
        return false;
    }
    else if (fruitchecking.val() == undefined){
        console.log(fruitchecking.val())
        alert("You must pick a fruit!")
        return false;
    }
    else if (standingchecking.val() == undefined){
        console.log(standingchecking.val())
        alert("You must pick a class standing!")
        return false;
    }
    else{
        return true;
    }
    
});
