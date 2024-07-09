function SetUsername(username){
    // Complex DB calls
    this.username = username
    console.log("called");
}

function CreateUser(username,email,password){
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}

const Nova = new CreateUser("Novamaster","Nova@meta.com","Nova@123")
console.log(Nova);