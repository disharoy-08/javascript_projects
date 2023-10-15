//const tinderUser = new Object() //singleton object
const tinderUser = {} //nonsingleton object
tinderUser.id = "123abc"
tinderUser.name = "Pinky"
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const regularUser = {
    email : "pinki@gmail.com",
    fullname: {
        userfullname:{
            firstname: "disha",
            lastname: "roy"
        }
    }
}

// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname)
// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = { obj1, obj2}
//console.log(obj3)

const obj4 = Object.assign({},obj1, obj2)
//console.log(obj4)

const obj5 = {...obj1, ...obj2}
//console.log(obj5)

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
]

users[1].email
// console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


