// there are two main datatypes one premetive and another non-premetive(or refernce). they are devided on the basis of that how they store inside memory
// premetive datatypes
/*there is 7 premetive datatypes. those are null , number, boolean, bigint , string , symbole, undefined */

const score = 100
const scoreValue = 100.02
// above both are numbers
const isLogedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
//among them whichever datatypes you put inside the symbol, it become a symbol. 
const anotherid =Symbol('123')
// though another veriables symbol looks same they will not same. 
console.log(id === anotherid)

//Non-premetive datatypes
/* Array , object , functions */

//JavaScript is dynamicaly typed language
