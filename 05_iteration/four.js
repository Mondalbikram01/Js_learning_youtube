const myObject = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift by apple"
}
for (const key in myObject) {
    // console.log(`${key} shortcut of ${myObject[key]}`)
}


const progamming = ["js", "py", "rb", "swift", "cpp", "java"]
for (const key in progamming) {
    console.log(progamming[key]);
}


// shot trick but not hard and fast rull
// work with array use for of loop
// work with object use for in loop