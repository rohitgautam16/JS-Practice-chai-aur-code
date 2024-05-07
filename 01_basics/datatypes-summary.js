// Primitive

// 7 Types : String, Number, Boolean, Null, Undefined, Symbolm BigInt

const score = 100

const scoreValue = 100.3

const isLoggedIn = false

const outsideTemp = null

let userEmail

const id = Symbol("123")
const anotherid = Symbol("123")

console.log(id === anotherid);

const bigNumber = 47279869527862756827n

console.log(typeof bigNumber);
// Reference ( Non-Primitive)

// Arrays, Objects, Functions

const heros = ["Shaktiman", "Naagraj", "Doga"]

let myObj = {
    name: "rohit",
    age : 23 
}

const myfunction = function(){
    console.log("Hello World");

}
console.log(typeof myfunction);