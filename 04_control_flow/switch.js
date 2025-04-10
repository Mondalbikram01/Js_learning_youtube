// this will helpfull for redux
// syntax....
// switch(key){
//     case value:
//         break;
//     default:
//         break;
// }

/*think you have a key and the case are locks, inside the locks there is code. when a lock open with that key the inside code will be executed*/

const month = 3
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("no match")
        break;
}
//break is needed to stop code execution after case match. if you don't use break then all case will be executed except default
// you can use string instead of number

