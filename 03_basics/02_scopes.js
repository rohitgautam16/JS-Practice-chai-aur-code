// var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20
    // console.log("Inner :", a);
}



// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Rohit"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);

    // two()

}

// one()

if(true){
    const username = "Rohit"
    if(username === "Rohit"){
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website); // not is scope
}
// console.log(username); // not in scope

// ++++++++++++++++++++++++++++++ Intresting ++++++++++++++++++++++++++

console.log(addOne(5))
function addOne(num){
    return num + 1
}

addTwo(5)
const addTwo = function(num){
    return num + 2
}
