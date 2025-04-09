// Singleton
// this is the difference
// constructor method is Object.create, this makes singleton

// object literals
// object declared by curly braces {}. made with keys and values
// keys always store as a string but we can write it in string format or in another way
const jsUser = {
    name : "Bikram",
    "full Name" : "Bikram Mondal",
    age : 10 ,
    location : "West Bengal",
    email: "bikram@gmail.com",
    isLoggedIn : false,
    lastLoggedIn : ["Monday" , "Saturday"]
}
// two ways to get an object 
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full Name"]);