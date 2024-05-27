const user = {
    username : "Rohit",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "rg"
// user.welcomeMessage()

// console.log(this);

// const chai = function(){
//     let username = "Rohit"
//     console.log(this.username);
// }
const chai = () => {
    let username = "Rohit"
    console.log(this);
}
// chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// const addTwo = (num1,num2) => num1 + num2

// const addTwo = (num1,num2) => (num1 + num2)

const addTwo = (num1,num2) => ({username:"Rohit"})

console.log(addTwo(3,4))

// const myArray = [2,3,4,56,6]

// myArray.forEach(() => {})