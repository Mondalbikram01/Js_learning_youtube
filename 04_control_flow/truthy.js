// suppose something is true
const userEmail = "bik@gmail.com"
if (userEmail){//here i didn't check userEmail is == the actual value or not. but it suppose the value is true and the code is executed
    console.log("got user email");
}else{
    console.log("don't have user email");
}
// according to truthy : if empty string then false, if empty array then true. in details below


// falsy values 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

// way to check array is empty or not
const forArrayCheck = []
if (forArrayCheck.length === 0){
    console.log("array is empty");
}

const forObjectCheck = {}
if (Object.keys(forObjectCheck).length === 0){//Object.keys(forObjectCheck) this way you can convert the object into array and then parform the array method
    console.log("object is empty");
}


// some inteview related information
console.log(false == 0);
console.log(false == "");
console.log(0 == "");
// all true


// Nullish Coalescing Operator (??): null undefined
// the first value will be printed except null and undefined
// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20
// console.log(val1);

//above and below both are different

// Terniary Operator
// syntax (condition)? true : false
// sortly work like if else 
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("the price is greater than 80") : console.log("the price is less than 80")
