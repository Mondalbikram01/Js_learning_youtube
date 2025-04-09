// {} braces is called scope but it is also used in object making
// inside the braces is called block scope and outside the braces is called global scope
// var c = 4;//we don't use it as var is global scope
if (true){
    let a = 2
    const b = 3
}
// browser and code enviroment, both  global scope are different


// nested function
// shot trick to remember : junior can get from senior but senior can't get from junior.
function one(){
    const username = "Bikram"
    function two(){
        const website = "youtube"
        console.log(username);

    }
    // console.log(website);//you can't get it from here(don't uncomment)
    two()
}
// one()

if (true){
    const username = "Bikram"
    if (username === "Bikram"){
        const website = " youtube"
        // console.log(username + website);
    }
}


// +++++++++++++++++++++++++++++++++++++++++++++++interesting+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addOne(5));//with addTwo can't do this
function addOne(num){
    return num + 1
}

// an expression example
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(9));//this is called expression, here variable holds function
/*IMPORTANT : you can call addOne before function but you can't call addTwo before the declaration. the example above .
This is the concept of hosting, we will learn it leter.*/
