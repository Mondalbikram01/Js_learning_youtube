// a bit advance array operations
const marvel_heros = ["thor" , "ironman" , "spiderman"]
const dc_heros = ["suparman" , "aquaman" , "flash"]
// marvel_heros.push(dc_heros)//this add array inside array. push works on existing array
// console.log(marvel_heros);//avoid this type of adding

const allHeros = marvel_heros.concat(dc_heros)//it add all elements in one array. concat returns a new array
// console.log(allHeros);

// there is an easy way of concat
const all_new_heros = [...marvel_heros,...dc_heros]//its called spread
// console.log(all_new_heros);//it do the same as concat

const another_array = [1, 2, 3, [4, 5, 6] , 7 , [6, 7, [4, 5]]]
// inside this there is array inside array. but we want all elements in one array
// use flat and give the depth inside parenthesis
const real_another_array = another_array.flat(Infinity)//it doesn't change actual array, it gives you a new array
// console.log(real_another_array);
// console.log(another_array);

console.log(Array.isArray("Bikram"));//here i am checking that is it array or not an array inside the parenthesis. if it isn't then will change the  way given below
console.log(Array.from("Bikram"));//it change to an array
console.log(Array.from({ name : "Bikram"}));//javaScript can't convert this into an array and give you a empty array. interesting

let score1 = 100
let score2 = 200
let score3 = 300 
// make an array with all this variables
console.log(Array.of(score1, score2, score3));//returns an array from a set of elements


