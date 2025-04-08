// a bit advance array operations
const marvel_heros = ["thor" , "ironman" , "spiderman"]
const dc_heros = ["suparman" , "aquaman" , "flash"]
// marvel_heros.push(dc_heros)//this add array inside array. push works on existing array
// console.log(marvel_heros);//avoid this type of adding

const allHeros = marvel_heros.concat(dc_heros)//it add all elements in one array. concat returns a new array
// console.log(allHeros);

// there is an easy way of concat
const all_new_heros = [...marvel_heros,...dc_heros]//its called spread
console.log(all_new_heros);//it do the same as concat

