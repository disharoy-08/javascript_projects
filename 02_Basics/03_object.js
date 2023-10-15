// Singleton

// object literals

const mySym = Symbol('key1')

const JsUser = {
    name: "Disha",
    "full name": "Disha Roy",
    [mySym]: "mykey1",
    age: 21,
    location: "Howrah",
    email: "disha@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])
console.log(typeof JsUser[mySym])
console.log(typeof mySym)

JsUser.email = "disha@microsoft.com"
console.log(JsUser.email)

//Object.freeze(JsUser)
JsUser.email = "disha@chat.com"
console.log(JsUser.email)
console.log(JsUser)

JsUser.greeting = function(){
    console.log(`Hello Js user, ${this.name}`)
}

console.log(JsUser.greeting())


