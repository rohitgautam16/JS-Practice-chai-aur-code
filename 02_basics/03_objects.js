// singleton
// Create.object 

// Object Literals

const mysym = Symbol("key1")

const JSuser = {
    name : "Rohit",
    "full name" : "Rohit Gautam",
    [mysym] : "mykey1",
    age : 21,
    Email : "rohit@developer.com" ,
    isLoggedIn : false,
    LastLogInDays : ["Saturday","Sunday"]

}

// console.log(JSuser.Email);
// console.log(JSuser["Email"]);
// console.log(JSuser["full name"]);
// console.log(JSuser[mysym]);

JSuser.Email = "rohit@google.com"
// Object.freeze(JSuser)
JSuser.Email = "user@gmail.com"

// console.log(JSuser);

JSuser.greeting = function(){
    console.log("Hello JS user");
}
JSuser.greetingTwo = function(){
    console.log(`Hello JS user , ${this.name}`);
}
console.log(JSuser.greeting());
console.log(JSuser.greetingTwo());
