// if 
// if (condition){scope}
const isUserLoggedIn = true
if (isUserLoggedIn){
    // console.log("logged in");
}

// conparison operator 
// <, >, ==, <=, >=, !=, ===, !==
// console.log("2" == 2);
// console.log("2" === 2);

// const temperatur = 55
// if (temperatur < 40){
//     console.log("temperatur is less than 40");
// }
// else{
//     console.log("temperatur is greater than 40")
// }


// const score = 300
// if (score > 100){
//     let power = "fly"
//     console.log(`user power: ${power}`);
// }


// short hand notetion
// const balance = 1000
// if (balance > 500) console.log("this work is done by implesit notetion");//code should be in one line and end with terminator

// const amount = 1000
// if (amount < 500){
//     console.log("amount is less than 500");
// } else if (amount < 800){
//     console.log("amount is less than 800");
// }else if (amount < 900){
//     console.log("amount is less than 900");
// }else{
//     console.log("amount is greater than 900")
// }

const userLoggedIn = true
const debitcard = true
// if (userLoggedIn){
//     if(debitcard){
//         console.log("you can parches the course");
//     }else{
//         console.log("need debit card");
//     }
// }else{
//     console.log("pls login first");
// }

// or you can do so using logical operator
// if (userLoggedIn && debitcard){// logical AND check both side true or not 
//     console.log("you can parches");
// }

const loggedInFromGoogle = true
const loggedInFromEmail = false
if (loggedInFromGoogle || loggedInFromEmail){//logical OR check if any one true
    console.log("user logged in");
}