// let score = "22"


// console.log(typeof score);
//result giving me string,but i need in number 
//so i declare a new variable
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);


// case 1
// if there is no accurate number like 22,33......,12,16....like this ,and there has something like a,b,c added then you will get number type after conversion but this is not right
// let think = "22ac"
// console.log(typeof think);
// let changeInNumber = Number(think)
// console.log(typeof changeInNumber);//output will be Number
// console.log(changeInNumber);//output will be NaN

//case 2
// if there is null inside
// let think_2 = null
// console.log(typeof think_2);// output object
// let changeInNumber_2 = Number(think_2)
// console.log(typeof changeInNumber_2);// output number
// console.log(changeInNumber_2);// output 0

/*for undefined case you will get 
for first console output undefined
    seconde console output number
    third console output NaN
*/
// NaN means Not an Number

//"22" => 22
// "22abc" => NaN
//true => 1; false =>0


// another conversion
// let isLogedIn = 0
// let booleanIsLogedIn = Boolean(isLogedIn)
// console.log(booleanIsLogedIn);//output true

/*for boolean case , if there is something inside the string it will be true,if there is nothing inside the string it will give you false. if 0 then false and if 1 then true*/

//string conversion
// let someNumber = 31
// let  NumberIntoString = String(someNumber)
// console.log(NumberIntoString);//output 31 as string
// console.log(typeof NumberIntoString);// this is the evidence of string


// ************************Operations************************

// let value = 2
// let negvalue = -value
// console.log(negvalue)

// this are basic operations
// console.log(3 + 3)
// console.log(3 - 3)
// console.log(3 * 3)
// console.log(3 ** 3)
// console.log(3 / 3)
// console.log(3 % 3)

// some thing different
// let str1 = "hello"
// let str2 = " Bikram"
// console.log( str1 + str2)

// something complex
// console.log(2 + "2")
// console.log("2" + 2)
// console.log("1" + 2 + 2)//output 122
// console.log(1 + 2 +"2")//output 32
// if the first charecter is a number then they add as a  number and when string comes ,they add as a string.
// if the first charecter is a string then they add everything as string 

// console.log(2 + 3 * 4 / 5 % 6)
// in this type of cases ,use more parenthesis. like this..
// console.log((2 + 3 )* 4 / 5 % 6)

// console.log(+true)
// console.log(+"")
// avoid this type of code writting. 

// **IMPORTANT : FOCUS ON CODE REDABILITY

/* Go and read prefix and postfix operator from mdn reference. 
here the breaf, ++x it is prefix which first increment the value by  1 and then print , next it store the same value.
                x++ it is postfix which first print the value and then increment by 1 and store it for leter.
*/
let i = 1
console.log(i++)// here i is 1 and incremented to 2
console.log(i)//here i is now 2

let j = 1
console.log(++j)//here j is incremented to 2 and output 2 then store it 2
console.log(j)//here j is 2 as it was stored 




