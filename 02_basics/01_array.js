// arrays 
// arrays must be in [] bracket
const myArr = [1 , 2 , 3 , 4 , 5]
// the items inside the [] bracket is called elements. Element can be any data type
// console.log(myArr[0]);//can access elements this way
// array changes shallow copies(or i say the acctual reference value)
const myHeros = ["ironman" , "superman" , "spiderman"]
const myArr_2 = new Array(1, 2, 3, 4)

// Array methods
// myArr.push(6)//push use to add a element inside array at the end
// myArr.pop()//pop remove the last element from the array

myArr.unshift(9)//it add the value to the begining. for this it changes all array indexing which make can disturb you. So it is not recomended. but if necessary you can use it 
myArr.shift()//just like pop, but its remove the element from the beginning.

// console.log(myArr);
// console.log(myArr.includes(9));//it checks that the element is present or not inside or not and give boolean result
// console.log(myArr.indexOf(3));//if the element present give you the index number else give you -1.

// console.log(myArr.join());//it gives you the array elements but it changes it in string format
// const newArr = myArr.join()//i just put it inside another variable
// console.log(typeof newArr);//give you string type

// IMPORTANT: Difference between slice and splice
// slice shows the elements of the index range which you put inside the parenthesis from the array. But it dosn't include the last index position
// splice gives the elements of the index range which you put inside the parenthesis from the array and it cut out the portion from the array.
// let's see
const myArr_3 = [0, 1, 2, 3, 4, 5, 6]
console.log("A" , myArr_3);
let myn1 = myArr_3.slice(0,3)
console.log("B" , myn1);
let myn2 = myArr_3.splice(0,3)
console.log("C" , myn2);
console.log("D" , myArr_3);
