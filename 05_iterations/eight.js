const myNums = [ 1,2,3]

// const myTotal = myNums.reduce(function(acc,currVal){
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal
// },0)

// const myTotal = myNums.reduce( (acc,currVal) => acc + currVal ,0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemname: "JS course",
        price: 2999
    },
    {
        itemname: "Py course",
        price: 999
    },
    {
        itemname: "mob dev course",
        price: 5999
    },
    {
        itemname: "data science course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce( (acc,item) => item.price + acc ,0)

console.log(priceToPay);
 