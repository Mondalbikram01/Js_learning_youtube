// const coding = [ "py", "js", "rb", "cpp", "java"]

// you can't store forEach loop
// const value = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// })
// console.log(value);//whatever you do , you can't return and store

// now lets talk about the case
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const NewNums = myNums.filter( (num) => num > 4)//this returns the value but forEach loop doesn't return the value
//(num) => num > 4 here is the callback function and num > 4 is the condition
// console.log(NewNums);

// error case on above code
// if you use arrow function with curly braces then you have to use return keyword. the above code is using implisit return.
// const NewNums = myNums.filter( (num) => {
//     return num > 4
// })

// do the same work using forEach loop 
// const newNums = []
// myNums.forEach((num) => {
//     if (num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);


// lets do more with filter
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBook = books.filter( (bk) => bk.genre === 'History')
  userBook = books.filter( (bk) => {
     return bk.publish >= 1995 && bk.genre === "History"//two condition checking
    })//this will overwrite the last userbook
  console.log(userBook);
