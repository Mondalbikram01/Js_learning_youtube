// function is a bunch of code lines inside in a packet . you can use it anywhere in your code by calling its name
// syntax function_keyword defination_name(){scope}

function sayMyName(){
    console.log('B');
    console.log('I');
    console.log('K');
    console.log('R');
    console.log('A');
    console.log('M');
}
// sayMyName()//this is the function call syntax, just sayMyName is defination and with parenthesis it will exicute

function addTwoNumber(number1,number2){// when i create a function ,here inside parenthesis the number1 and number2 are paramitar 
    console.log(number1 + number2);
}
// call the function 
// addTwoNumber(2,3)//here 2 and 3 are called argument which goes to the paramiter 
// const result = addTwoNumber(4 ,5)//in javascript you can store it inside a variable but not in this way . 
// console.log("result:", result);//here you get undefined

/*console.log just print the value. but it dosn't return the value to there from where the function was called. to get the value on that variable and store it inside the variable ,use return key word. given below */

function addTwoNumber_1(number1 , number2){
    let result = number1 + number2
    return result
    console.log("bikram");//no code will be executed after the return keyword. RULL
}
const new_result = addTwoNumber_1(8 , 9)
// console.log ("new_result:", new_result);

// another way 
function addTwoNumber_2(number1 , number2){
    return  number1 + number2//it will return number1 + number2 without storing it
}
const another_result = addTwoNumber_2(7 , 8)
// console.log ("another_result:", another_result);



function loginUserMessage(username){
    return `${username} just logged in`
}
// const status = loginUserMessage("Bikram")
// console.log(status);//you can do this or do the given below
// console.log(loginUserMessage("Bikram"));// it will print directly //go with this

// suppose user doesn't put anything then the value will be undefined or Null. to avoid this do ..
function loginUserMessage_1(username = "empty"){//set a default value
    return `${username} just logged in`
}
// console.log(loginUserMessage_1())

// best way is ..using if else
function loginUserMessage_2(username){
    if (!username){//here is the concept is that username is false(as nothing is inside) , by using ! it will become true and then scope start.
        console.log("pls enter an username");
        return
    }
    else{
        return `${username} just logged in`
    }
}
// console.log(loginUserMessage_2("Bikram"));



// some complex case
// ... 3 dot is rest operator and also spread operator based on use case
//case is when you don't know how many number or paramiter will be needed
function calculateCartPrice(...num1){
    return num1//it will give you an array. the rest operator make an array of all argument 
}
// console.log(calculateCartPrice(100, 200, 300, 400));
// we will learn how to deal with that array leter
// another important case
function calculateCartPrice_1(val1, val2,...num1){
    return num1//it will give you an array. the rest operator make an array of all argument 
}
// console.log(calculateCartPrice_1(100, 200, 300, 400));//according to this arrgument the 100 goes to val1 and 200 will go val2 and others will go inside rest operator and make an array 

// lets deal with object 
const user = {
    username: "Bikram",
    price: 123
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);//value get by dot key
}
// handleObject(user)//as i console inside i don't need to console here
//inside parenthesis the user is the object name from where i am getting the result

// case of type safety
const user_1 = {
    username: "Bikram",
    prices: 123//i change it to prices
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user_1)//here the price result will be undefined
// to avoid this type of error you need to check that is the object element present or not which you are getting

// you can pass the object this way . don't need to cheate it before
handleObject({
    username: "sam",
    price: 33
})

// let array handle
const myNewArray = [400, 500, 600, 700]
function handleArray(anyArray){
    return anyArray[2]//indexing wise i return the third value 
}
// console.log(handleArray(myNewArray));

// dont need to create array before
console.log(handleArray([900,1000,1200,1400]));
