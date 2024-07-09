// let myName = "Rohit    "
// let mychannel = "Rg    "

// console.log(myName.length);

let myHeroes = ["IronMan","SpiderMan"]

let heroPower = {
    IronMan : "Mechanical Armour",
    SpiderMan : "SuperHuman Strength",

    getSpiderPower: function(){
        console.log(`Spidy's Power is ${this.SpiderMan}`);
    }
}

Object.prototype.Rohit = function(){
    console.log(`Rohit is present in all objects`);
}

Array.prototype.heyRohit = function(){
    console.log(`Rohit says hello`);
}

// heroPower.Rohit()

// myHeroes.Rohit()
// myHeroes.heyRohit()
// heroPower.heyRohit()


// Inheritence

const user = {
    name: "chai",
    email: "chai@google.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = user

// Modern Syntax

Object.setPrototypeOf(teachingSupport, teacher)

let anotherusername = "Orion"

String.prototype.truelength = function (){
     console.log(`${this}`);
     console.log(`${this.trim().length}`);
}

anotherusername.truelength()
"Rohit".truelength()
"KulhadChai".truelength()