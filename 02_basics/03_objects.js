// Singleton
// this is the difference
// constructor method is Object.create, this makes singleton

// object literals
// object declared by curly braces {}. made with keys and values
// keys always store as a string but we can write it in string format or in another way
const mysym = Symbol("key1")//this is the right way to declare a symbol
const jsUser = {
    name : "Bikram",
    "full Name" : "Bikram Mondal",
    [mysym] : "key1",//this is the right way of symbol inside an object
    age : 10 ,
    location : "West Bengal",
    email: "bikram@gmail.com",
    isLoggedIn : false,
    lastLoggedIn : ["Monday" , "Saturday"]
}
// two ways to get an object 
// console.log(jsUser.email);
// console.log(jsUser["email"]);

// console.log(jsUser["full Name"]);
// console.log(jsUser[mysym]);//the right way
// in js journey most of the time you access the objects by dot but some case when you have no other choice , you need to use squre bracket 

// change  a value of an object
jsUser.email = "bikram@google.com"
// console.log(jsUser);
// to freez and object
// Object.freeze(jsUser)
jsUser.email = "bikram@microsoft.com"
// as jsuser is freeze so you can't change anything
// console.log(jsUser);

// lets add some function 
jsUser.greeting = function(){
    console.log("hello js user");
}
jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);//you can got every key value by declaring "this" keyword
}
console.log(jsUser.greeting());//to run this don't freeze the object
console.log(jsUser.greetingTwo());