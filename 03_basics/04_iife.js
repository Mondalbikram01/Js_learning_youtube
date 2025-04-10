// Immediately Invoked Function Expressions (IIFE)
// It is important to stop polutation from global scope to function
 
function chai(){
    console.log(`DataBase connected`);
}
// chai()
// can do above but there is a problem that global scope can polute the variable inside . to avoid that do below
(function chai_1(){
    console.log(`DataBase connected`);
})();//carefull : you have to use terminator to stop invoke
/*syntax is ()(). inside the first parenthesis we write function deffination and in second parenthesis is execution call. This is IIFE. in interview you can tell that we use IIFE to avoid global scope pollution*/

// you can use arrow function also
( () => {
    console.log(`DB CONNECTED TWO`);
})();

// use it like function 
( (name) => {//use paramitar like function
    console.log(`DB CONNECTED TWO ${name}`);
})("Bikram");//pass argument as you pass it


