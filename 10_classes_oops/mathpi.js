const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);

// Math.PI = 5

// console.log(Math.PI)

const chai = {
    name: "Ginger chai",
    price: 250 ,
    isavailable: "true",

    OrderChai: function () {
        console.log("chai nahi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai , "name",{
    // writable: false,
    enumerable: false
})


console.log(Object.getOwnPropertyDescriptor(chai, "name"));


for (let [key,value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
    
}

// console.log(Object.getOwnPropertyDescriptor(Math, "PI"));

// Object.defineProperty(Math , "PI",{
//     writable: true,
//     enumerable: true,
//     configurable: true
// })
// console.log(Object.getOwnPropertyDescriptor(Math, "PI"));