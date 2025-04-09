// lets talk about singalton. Declare using constructor
// const tinderUser = new Object()//singalton object
const tinderUser = {}//non singalton object

tinderUser.id = "123abc"//you can put value inside object like this
tinderUser.name = "sanjay"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// object inside object, you can do this also
const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Bikram",
            lastname : "Mondal"
        }
    }
}
// now access the value
// use dot to get more
// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);


// let marge the value 
const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}
// const obj3 = Object.assign({},obj1,obj2)//{} curly braces you can give to show there can be more, then first is target and second is source
// console.log (obj3);

const obj4 = {...obj1, ...obj2}//most of the time you will use this
// console.log (obj4);


// in array form
const users = [
    {
        id: '21',
        email: "b@gmail.com",
        isLoggedIn: false
    },
    {
        id: '22',
        email: "b@gmail.com",
        isLoggedIn: false
    },
    {
        id: '20',
        email: "b@gmail.com",
        isLoggedIn: false
    },
    {
        id: '23',
        email: "b@gmail.com",
        isLoggedIn: false
    },
]
// then how will you get this?..this way
// console.log(users[1].id);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));//this is very important. it will give you the result in array which you can use in any loop or anywhere
// same way 
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));//it will make all key value into array form

// when you check any specific property is present inside 
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//gives you boolean value


// ..........................destructuring.......................................

const course = {
    courseName : "javaScript",
    price : 999,
    courseInstructor : "Bikram"
}
// now when you use values , usualy you do this 
// console.log(course.courseInstructor);//it is so long . you can do this given below

const {courseInstructor: instructor} = course//syntax is const {which you extracting : desired name(optional)} = place from where you are extracting.
// console.log(courseInstructor);//do check when optional name is not present
console.log(instructor);
//desstructuring concept will help you in react very much


// .................brief api
// most of the time you get api response data in object format but many times you may get it in array format
// api web site name is "randomuser me api" free
// copy any api response from the above api website and after this you need to study the response for few min. to do so go "json formater"
// paste the response and do converte and select the type to see . here tree is the good one 


