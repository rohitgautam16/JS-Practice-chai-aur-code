class User {
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get email(){
        return `${this._email.toUpperCase()}`
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}chaipiyomstrho`
    }

    set password(value){
        this._password = value
    }
}


const rohit = new User("rg@ai.com","1234")
console.log(rohit.email);
console.log(rohit.password);