// there are two main datatypes one premetive and another non-premetive(or refernce). they are devided on the basis of that how they store inside memory
// premetive datatypes
/*there is 7 premetive datatypes. those are null , number, boolean, bigint , string , symbole, undefined */

// const score = 100
// const scoreValue = 100.02
// above both are numbers
// const isLogedIn = false
// const outsideTemp = null
// let userEmail;

const id = Symbol('123')
//among them whichever datatypes you put inside the symbol, it become a symbol. 
const anotherid =Symbol('123')
// though another veriables symbol looks same they will not same. 
// console.log(id === anotherid)

// const BigNumber = 1234567890877654323n
// when you put 'n' at the  ene of a big number it become BigInt datatype 

//Non-premetive datatypes
/* Array , object , functions */
// Array must be in [] bracket
const heros = ["ironman" , "hulk" ,"captain"];
//objects must be in curly braket with key-value pairs. you can store it inside a variable also.
{
   name : "Bikram"
   age : 25
}
// you can create just a function by its syntax or you can create a function inside a variable. both examples ara given below
// function(){}// syntax
const myfunction = function(){
    console.log("Hello World");
}
/*when you find datatype of any Non-premetive datatypes using typeof you get function. when you find datatype of a function using typeof you will get function which is called object function*/
//JavaScript is dynamicaly typed language

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// memory allocation
// two types of memory - stack and heap
// Stack(primitive) and heap(non-primitive)
// in stack you get a copy of a variable,in heap you get actual reference

let myYouTubename = "name_1dotcom"
let anotherName = myYouTubename
console.log(anotherName)
anotherName = "name_2dotcom"
// as you get a variable copy so when you change it will change the copy not the original
console.log(myYouTubename)
console.log(anotherName)

// some advance example

let userOne = {
    email :"user_1@gmail.com",
    upi : "upi@ybl"
}
let userTwo = userOne
// when you change an object it will change actual object as it gives you the actual reference
// you can access key inside object using dot like this
userTwo.email = "user_2@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)

