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
addTwoNumber(2,3)//here 2 and 3 are called argument which goes to the paramiter 
const result = addTwoNumber(4 ,5)//in javascript you can store it inside a variable but not in this way . 
// console.log("result:", result);//here you get undefined

/*console.log just print the value. but it dosn't return the value to there from where the function was called. to get the value on that variable and store it inside the variable ,use return key word. given below */

function addTwoNumber_1(number1 , number2){
    let result = number1 + number2
    return result
}
const new_result = addTwoNumber_1(8 , 9)
console.log ("new_result:", new_result);
