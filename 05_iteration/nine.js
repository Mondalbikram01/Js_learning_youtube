// acc means accumulator and currval means currentvalue for reduce
// reduce 
// usefull for shopping cart
const myNums = [1, 2, 3]
// const myTotal = myNums.reduce( function (acc , currval){
//     console.log(`acc: ${acc} and currval: ${currval}`)//this is for showing the value at this position
//     return acc + currval
// }, 0)//here 0 is the initial value of acc
// console.log(myTotal);

// lets do it using arrow function
const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal);