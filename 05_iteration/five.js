// foreach loop
const coding = [ "py", "js", "rb", "cpp", "java"]
// coding.forEach( function (i) {//this function has no name, this is called callback function
//     console.log(i);
// })

// using arrow function
// coding.forEach( (i) => {
//     console.log(i);
// })


// using printme function. using function reference
// function printMe(i){
//     console.log(i);
// }
// coding.forEach(printMe)//just give the function reference here

// coding.forEach((i, index, arr) =>{//this parenthesis has access more than just i. It comes with index and the full array
//         console.log(i , index, arr);
// })

// object inside array
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]
myCoding.forEach((i) => {
    console.log(i.languageName);//now you can access the object as you access.
})

// it will help you in database