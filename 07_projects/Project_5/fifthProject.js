const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let hexColor = '#'
    for(let i = 0 ; i < 6 ; i++){
        hexColor += hex[Math.floor(Math.random() * 16)]
    }
    return hexColor
    /*the loop runnes for 5 times from 0-5. every time the loop runnes the random number gives 1 number and it will be the index number of the hex string. the positions comes and apped to the hexcolor. add as loop runnes for 5 times the hexcolor created. then code comes to return and it returns the hexcolor value to the variable*/
}