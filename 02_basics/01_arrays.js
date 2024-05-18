// Arrays
const arr = [0,1,2,3,4,5]
const heroes = ["IronMan","Spiderman","Hawkeye"]

const arr2 = new Array(9,8,7,6,5,4,3)

// console.log(arr[2]);

// Array Methods

arr.push(6)
arr.push(7)
arr.pop()

arr.unshift(9)
arr.shift()

// console.log(arr.includes(9));
// console.log(arr.indexOf(3));

// const newarr = arr.join()

// console.log(arr);
// console.log(newarr);

// Slice , Splice

console.log("A",arr);

const myn1 = arr.slice(1,3)
console.log(myn1);
console.log("B",arr);

const myn2 = arr.splice(1,3)
console.log(myn2);
console.log("C",arr);

