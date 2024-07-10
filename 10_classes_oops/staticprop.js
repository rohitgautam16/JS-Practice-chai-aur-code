class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static CreateId(){
        return `123`
    }
}

const Rg = new User("Rohit")
// console.log(Rg.CreateId())

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const guru = new Teacher("guruji","guru@ghantal.com")
guru.logMe()