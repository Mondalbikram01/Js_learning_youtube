// array specific loops
// for of 

// ["", "", ""]//string inside array
// [{}, {}, {}]//object inside array

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}
// no incriment needed

const greetings = "hello world"
for (const i of greetings) {
    // console.log(`each char is ${i}`);
}


// Maps+++++++++++++++
// we will know about it letter 
// now just for basics
const myMap = new Map() 
myMap.set('IN', "India")
myMap.set('USA', "United States of America")
myMap.set('Fr', "France")
// console.log(myMap);
// there is unique values inside map. you can't repeat one

// destructuring of an array
// syntax
for (const [key,value] of myMap) {
    // console.log(key, ":-", value);
}

const muObject = {
    game1 : "NFS",
    game2 : "Spiderman"
}
for (const [key , value] of muObject) {
    // console.log(key, ":-", value);
}
// object has different way , you can't iterate this way
