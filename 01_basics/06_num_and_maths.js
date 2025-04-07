const score = 100
// console.log(score);// terminator is a good habit
// it is a number datatype but more code writing practice use this wriing given below
const newScore = new Number(100)
// console.log(newScore);
// when you use new with datatype then value will be specified for the datatype

// console.log(newScore.toString());
// now this way you can make it in string and you can use all string operations .
// console.log(newScore.toString().length);
// example

// console.log(newScore.toFixed(2));
// how many zero you want after the decimal point. how many number you want have to put inside the parenthesis

const otherNumber = 123.589
// console.log(otherNumber.toPrecision(4));
// it gives you the precise valu on that position which position number you put inside the parenthesis
// inside the parenthesis , use number wisely

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));
// it will change the number on your desire formate. inside the parenthesis you need to put the format. for india it is 'en-IN'


// +++++++++++++++++++++++++++++++++++++++++++++++ maths +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// this is a default librery of javaScript

// console.log(Math.abs(-3));
// it gives you the absolute value. converts minus to plus
// console.log(Math.round(3.7));
// it will round the number. it give you the exact round number
// console.log(Math.ceil(3.1));
// this way you alway get the round upper value though it is 0.1
// console.log(Math.floor(3.9));
// this way you always get the round lower value though it is 0.9
// console.log(Math.min(3 , 9 , 5 , 8));
// you will get the minimum value by this way
// console.log(Math.max(3 , 9 , 5 , 8));
// you will get the maximum value by this way

console.log(Math.random());
// it will give you the random value between 0 and 1
console.log(Math.random()*10);
// if you multiply by 10 then the number will shift by 1 number. 
console.log(Math.random()*10 +1);
// there may be 0 come first after the decimal number. to avoid this you can and 1 at the end. but there is a problem if you add 1  this way for bodmas rull or operator precidence. you can do the given below
console.log((Math.random()*10) +1);


console.log(Math.floor((Math.random()*10) +1));
// you can get single number by this way from random

const min = 1
const max = 6
const diseNumber = Math.floor(Math.random() * (max - min + 1)) + min 
// here you add min as you need the minimum number
console.log(diseNumber);







