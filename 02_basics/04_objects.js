// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Peter"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    Userdetails: {
        UserfullName:{
            firstname: "Peter",
            Lastname: "Parker"
        }
    }
}

// console.log(regularUser.Userdetails.UserfullName.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}

// const obj3 = {obj1 , obj2}
// const obj4 = Object.assign({},obj1,obj2,obj3)
const obj4 = {...obj1,...obj2,...obj3}

// console.log(obj4);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]


users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('id'));

const course = {
    coursename: "JS in Hindi",
    price : "999",
    courseInstructor: "Hitesh"

}

// console.log(course.courseInstructor);

const {courseInstructor: Instructor} = course

// console.log(courseInstructor);
console.log(Instructor);

// {
//     ""name"": "JS in Hindi",
//     "price": "Free",
//     "courseInstructor": "Hitesh"
// }

[
    {},
    {},
    {}
]