const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNumbers.map( (num) => num + 10)//map also has callback function
// console.log(newNums);

// chaining concept
// line wise more than one methods chain wise. the value of first method goes to second method. 
const myNums = myNumbers
                .map( (num) => num * 10)
                .map( (num) => num + 1)//you can break from any operator or any method
                .filter( (num) => num >= 40)
console.log(myNums);

