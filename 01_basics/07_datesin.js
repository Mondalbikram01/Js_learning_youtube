// first go and check mdn reference
// time calculeted from 1 january 1970. the time give you in milisecond
// dates
const myDate = new Date()//if you don't put anything inside the parenthesis it will work on the present date and time
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

// console.log(typeof myDate);//date is object type

// const myCreatedDate = new Date(2025,0,10)
// inside parenthesis 1st is year , 2nd is month (in javaScript month stats from 0), 3rd is date number
// console.log(myCreatedDate.toDateString());

// const myCreatedDate_2 = new Date(2025,0,10,5,3,40,23)
// inside the parenthesis , the format is Date(year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number)
// console.log(myCreatedDate_2.toLocaleString());

const myCreatedDate_3 = new Date("05-23-2025")//it is mm-dd-yyyy format.(prefared in india)
// console.log(myCreatedDate_3.toLocaleString());
// console.log(myCreatedDate_3.getTime());//you can get the milisecond time by this way


let myTimeStamp = Date.now()//it gives you the present time in milisecond 
// console.log(myTimeStamp);

// when you want the present time in second do this 
// console.log(Date.now()/1000)//there is a problem , if you do this you will get a decimal value also. to avoid do given below
// console.log(Math.floor(Date.now()/1000))//don't do math.ceil as it will give you upper number and that make a mistake. do .round or .floor


// as date is an object so you can apply many methods
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());//month starts from 0 : january
console.log(newDate.getDay());//day starts from 1 : monday

// modern writing tecnique is string interpoletion
console.log(`${newDate.getDay()} is today and ${newDate.getMonth()} is this month`)


// given below is a very good code you can experiment with it.this way you can customize the date.
console.log(newDate.toLocaleString('default',{
    weekday : "long"//(suggestion:ctrl + space for more properties)
}))
