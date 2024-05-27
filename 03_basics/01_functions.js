// console.log("R");
// console.log("O");
// console.log("H");
// console.log("I");
// console.log("T");

function sayMyName(){
    console.log("R");
    console.log("O");
    console.log("H");
    console.log("I");
    console.log("T");

}

// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1,number2){
                  
    return number1 + number2
}

const result = addTwoNumbers(5,3)

// console.log("Result:", result);

function loginUsermessage(username="user"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just hoped in the server`
}

// console.log(loginUsermessage("Rg"));
// console.log(loginUsermessage("Rohit"));

function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500,1000,2000));

const user = {
    username : "Rohit",
    price : 199
}

function handleObject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);  
}

// handleObject(user)
handleObject({
    username : "sam",
    price : 399
})

const mynewArray = [200,300,400,500,600]

function returnsecondValue(getArray){
    return getArray [1]
}
// console.log(returnsecondValue(mynewArray));
console.log(returnsecondValue([200,100,400,500,600]));