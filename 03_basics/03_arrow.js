// this key word works on current contex
const user = {
    username: "Bikram",
    price: 234,
    welcomeMessage: function(){
        console.log(`${this.username},welcome to our site`);//inside the user scope i can access any variable using this keyword
    }
}

user.welcomeMessage()//it will print the default value
user.username = "sam"//now i change the default value
user.welcomeMessage()//it will print the recent value

// console.log(this)
/*as we inside the node enviroment , this keyword give you empty object. but when you run this keyword you will get window object.*/

// when you run this keyword inside function in node enviroment then
function chai(){
    console.log(this);
}
// chai()//here you get many things

//another wrong case
function chai_2(){
    let username = "Bikram"
    console.log(this.username);//you can't do it as it is just a function . you need to be inside the object
}
// chai_2()//undefined