// for of

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5,6]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"

for (const greet of greetings) {
     if(greet == " "){
        continue
     }
     // console.log(`Each char is ${greet}`);
}

// Map 

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")

// console.log(map);

for (const [key,Value] of map) {
     // console.log(key,':-',Value);
}

const myObject = {
    'game1': "NFS",
    'game2': "Spiderman"
}

// for (const [key,Value] of myObject) {
//     console.log(key,':-',Value);
// }