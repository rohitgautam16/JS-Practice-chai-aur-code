const useremail = []
if(useremail){
    console.log("got user email");
}else{
    console.log("Didn't got user email");
}

// falsy values

// false,0,-0,BigInt 0n,"",null,undefined,NaN

// truthy values

// "0",'false'," ",[],{}, function(){}

// if(useremail.length === 0){
//     console.log("Array is empty");
// }
const emptyobj = {}

if(Object.keys(emptyobj).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing operator (??): null Undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 3
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15


// console.log(val1);

// Terniary Operator 
// condition ? true : false
const iceteaPrice = 100
iceteaPrice <=80 ? console.log("less than 80") : console.log("more than 80");