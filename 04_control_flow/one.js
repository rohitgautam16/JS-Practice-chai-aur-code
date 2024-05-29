 // if
const isuserLoggedIn = true
const temperature = 41
//  if (temperature === 40){
//      console.log("temp is less than 50");
//  }else{
// console.log("temp is greater than 50");
//  }

 // <,>,<=,>=,==,!=,===,!==

 const score = 200 

//  if(score > 100){
//     let power = "fly"
//     console.log(`User Power: ${power}`);
//  }

//  console.log(`User Power: ${power}`);

// const balance = 1000
//  if(balance > 500) console.log("test"),console.log("test2"); // bad practice

// if(balance < 500){
//     console.log("less than 500");
// } else if(balance < 750) {
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 900");
// }else {
//     console.log("less than 1200");
// }

const userloggedIn = true
const debitcard = true
const loggedInfromGoogle = false
const loggedInfromEmail = true
if(userloggedIn && debitcard){
    console.log("Allow to buy course");
}
if(loggedInfromGoogle || loggedInfromEmail){
    console.log("User logged in");
}