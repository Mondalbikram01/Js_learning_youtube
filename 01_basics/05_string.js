// practice more string operations
const name = "Bikram"
const repoCount = 20
// you can concatinate using + , by this it means you can add them both
// console.log(name + repoCount + "something")//for better code writing don't use this. 
// use interpoletion which is given below. here use backticks `` and ${}
console.log(`My name is ${name} and my number of repository is ${repoCount}`)

// something different 
const gameName =  new String('bikram01-bm')
// this way you will gate more information if you write it in browser console
// console.log(gameName)

// you can get charecter by index number of the string
console.log(gameName[0])
// you can access manything by this way console.log(veriable name.method)
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))//you can get charecter by index number of the string. this way also 
console.log(gameName.indexOf('k'))//you can see the charecter position by this way. it must be inside cotetion 

const newString = gameName.substring(0,4)
console.log(newString);

console.log(gameName.length)
console.log(gameName[5])
const anotherString = gameName.slice(-9, 4)
console.log(anotherString)

const newStringOne = "   Bikram    "
console.log(newStringOne)
console.log(newStringOne.trim())//it will trim extra spaces


const url = "https://hitesh.com/hitesh%20choudhary"
 console.log(url.replace('%20','_'))
// it use to replace something with anything
console.log(url.includes('hitesh'))
// it use to chack something include or not
console.log(gameName.split('-'))
// you can split any string using this . you can put any charecter which is alredy present inside the string, as a separator inside the parenthesis.


// practice more string operations
// use tarminator is a good habit 