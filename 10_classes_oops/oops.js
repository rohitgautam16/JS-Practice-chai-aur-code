const user = {
    username: "rg",
    loginCount: 8,
    signedIn: true,
    
    getuserDetails: function () {
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
// console.log(user.getuserDetails());
// console.log(this);

function User (Username,loginCount ,isloggedIn){
    this.Username = Username
    this.loginCount = loginCount
    this.isloggedIn = isloggedIn

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }

    return this
}

const userOne = new User("rohit",12,true)
const userTwo = new User("Spiderman",11,false)
console.log(userOne);
console.log(userTwo);