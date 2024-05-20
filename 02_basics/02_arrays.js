const marvel_heros = ["IronMan","Thor","SpiderMan"]
const dc_heros = ["SuperMan","Batman","Wonderwoman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const heros = marvel_heros.concat(dc_heros)
// console.log(heros);

const all_heros = [...marvel_heros,...dc_heros]
// console.log(all_heros);

const another_array = [1,2,3,[4,5],6,7,[8,[9,10]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Rohit"));
console.log(Array.from("Rohit"));
console.log(Array.from({name:"Rohit"})); // Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));



