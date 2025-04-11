let index = 0 //veriable declared
while (index <= 10) {//condition inside parenthesis
    // console.log(`value of index is ${index}`);
    index = index + 2//increment by two // it is necessary to stop the loop or the loop will go infinite
}


let myArray = [ "superman", "batman", "spiderman"]
let arr = 0
while (arr < myArray.length) {
    console.log(`hero name ${myArray[arr]}`)   
    arr = arr + 1
}

// do while loop ++++++
// first work then condition check
let score = 0
do {
    console.log(`score value is ${score}`);
    score++
} while (score <= 10);
