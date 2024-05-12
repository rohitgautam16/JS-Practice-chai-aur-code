const name = "Rohit"

const repocount = "50"

// console.log(name + repocount + " value");

console.log(`Hello my name is ${name} and my repocount is ${repocount}`);


const gameName = new String("hitesh-hc-com")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("h"));

const newstring = gameName.substring(0, 4)
console.log(newstring);

const anotherstring = gameName.slice(-8, 4)
console.log(anotherstring);

const newstringOne = "    rohit    g"
console.log(newstringOne);
console.log(newstringOne.trim());

const url = "https://rohit.com/rohit%20gautam"
console.log(url.replace('%20', '-'))
console.log(url.includes("aman"));

console.log(gameName.split("-"));
