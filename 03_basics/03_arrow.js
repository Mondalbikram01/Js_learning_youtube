// this key word works on current contex
const user = {
    username: "Bikram",
    price: 234,
    welcomeMessage: function(){
        console.log(`${this.username},welcome to our site`);//inside the user scope i can access any variable using this keyword
    }
}

// user.welcomeMessage()//it will print the default value
// user.username = "sam"//now i change the default value
// user.welcomeMessage()//it will print the recent value

// console.log(this)
/*as we inside the node enviroment , this keyword give you empty object. but when you run this keyword you will get window object.*/

// when you run this keyword inside function in node enviroment then
function chai(){
    console.log(this);
}
// chai()//here you get many things

//another wrong case
function chai_2(){
    let username = "Bikram"
    console.log(this.username);//you can't do it as it is just a function . you need to be inside the object
}
// chai_2()//undefined

const chai_3 = function (){
    let username = "Bikram"
    console.log(this.username);//you can't do it as it is just a function though it is stored in a variable . you need to be inside the object
}
// chai_3()//though you store it in a variable you get undefined result


// arrow function
// remove the function keyword and add => after parenthesis
const arrowFunc = () => {
    let username = "Bikram"
    console.log(this.username);//this will also give you undefined result
    console.log(this);//this will also give you empty object result
}
// arrowFunc()

// arrow function syntax () => {}
// you can store it inside a variable like const addTwo = () => {} . and everything is same with function

//basic arrow function
// const addTwo = (num1 , num2) => {
//     console.log(num1 + num2);//you can do this also using return keyword
// }
// addTwo(2,3)//when you use return need to use console.log

//**IMPORTANT : implicit return//basically it is arrow function
// no need to use curly braces. also you can remove return keyword
const addTwo = (num1 , num2) => (num1 + num2)

// console.log(addTwo(2,3));
//when you use curly braces you need to write return keyword and if you use parenthesis you don't need to write return keyword
//this tecknique will very usefull in react

//when you need to use object. then the object must be inside curly braces but the curly braces must be inside parenthesis
const addObject = () => ({username: "Bikram"})
// console.log(addObject());


