// ES6 

// class User{
//     constructor(username, email, password){
//          this.username = username
//          this.email = email
//          this.password = password

         
//     }
//     encryptpassword(){
//         return `${this.password}abc`
//      }
//      capitaliseUsername(){
//         return `${this.username.toUpperCase()}`
//      }
// }

// const chai = new User("Chai","chai@gmail.com","123")

// console.log(chai.encryptpassword());
// console.log(chai.capitaliseUsername());

// Behind the Scene

function User(username, email, password){
            this.username = username
            this.email = email
            this.password = password

}

User.prototype.encryptpassword = function(){
            return `${this.password}abc`
}

User.prototype.capitaliseUsername = function(){
            return `${this.username.toUpperCase()}`
}

const tea = new User("tea","chai@gmail.com","123")

console.log(tea.encryptpassword());
console.log(tea.capitaliseUsername());