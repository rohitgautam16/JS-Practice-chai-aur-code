const promiseOne = new Promise(function(resolve,reject){
      // Do an Async task
      // DB calls,cryptography,Network calls
      setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log('Promise Consumed');
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve({username: "Rohit" , Email: "rohit@user.com" })
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour =new Promise(function(resolve,reject){
    setTimeout(function(){
       let error = false
       if(!error){
          resolve({username: "Rohit", password: "1234"})
       } else{
          reject('ERROR : Something went Wrong')
       }
    },1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
   console.log(error);
})
.finally(() => {
    console.log("Finally the promise is either resolved or rejected");
})

const promiseFive = new Promise((resolve,reject) => {
    setTimeout(function(){
        let error = true
        if(!error){
           resolve({username: "JavaScript", password: "1234"})
        } else{
           reject('ERROR : JS went Wrong')
        }
     },1000)
})

async function consumepromiseFive(){
      try {
        const response = await promiseFive
         console.log(response);
      } catch (error) {
        console.log(error);
      }
}

consumepromiseFive()

// async function getAllusers(){
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//       } catch (error) {
//         console.log("E:", error);
//       }
// }

// getAllusers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
     return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error) => {
    console.log(error);
})