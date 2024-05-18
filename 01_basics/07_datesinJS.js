// date

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(typeof myDate);

// let mycreatedDate = new Date(2023,0,23)
// let mycreatedDate = new Date(2023,0,23,4,0)
let mycreatedDate = new Date("2024-05-18")
// console.log(mycreatedDate.toString());

let mytimeStamp = Date.now()

// console.log(mytimeStamp);
// console.log(mycreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
console.log(newdate);
console.log(newdate.getMonth() + 1);
console.log(newdate.getDay());


// `${newdate.getDay()} and the time is`


newdate.toLocaleString('default', {
    weekday: "long"
})

