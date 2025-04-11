// for loop
/*syntax in my language : first inside the parenthesis you declare a valiable name index and then after it you will find a condition with array. next there Will be a increment and at last parenthesis . The flow go like this .. first variable check then condition and flow go inside the parenthesis and then come to increment , next again go the flow inside code*/
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


// for (let i = 0; i <= 10; i++) {
//     const element = i;//for first time index 0 comes here and then everytime come index++ value
//     console.log(element);
    
// }
// // ctrl + D is the short cut key to access all same keywords, first double click and then shortcut key

// a condition inside loop
// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5){
//         console.log("5 is best");
//     }
//     console.log(element);
    
// }


// loop inside loop
// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop ${i}`)
//     for (let j = 0; j <= 10; j++) {
//         console.log(`inner loop ${j} and on going outer loop ${i}`)
        
//     }
    
// }
// here outer loop 1 time = inner loop 10 times

// for (let i = 0; i <= 10; i++) {
//         console.log(i);//no need to store any where
// }


let myArray = ["flash", "batman", "suparman"]
for (let index = 0; index < myArray.length; index++) {
        const element = myArray[index];
        // console.log(element);
        
}

// to shop a loop use ctrl + c

// important concept for loop
// break and continue

for (let i = 1; i <= 20; i++) {
        if(i == 5){
                // console.log("detected 5");
                break;
        }
        // console.log(`value of i is ${i}`);
        
}
// break keywords stop the execution  and come out from that scope 

for (let i = 1; i <= 20; i++) {
        if(i == 5){
                console.log("detected 5");
                continue;
        }
        console.log(`value of i is ${i}`);
        
}
// continue skip the particular condition and run the process after it . it doesn't print particular condition
