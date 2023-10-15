// function add(n1, n2){
//     console.log(n1 + n2)
// }

// const result = add(2, 5)
// console.log(result)  // Undefined -- because in this case function is not returning ant value it just console logging the value


function add(n1, n2){
    return(n1 + n2)
}
// const result = add(2, 5)
// console.log('result: ',result)


function loginUserMessage(username){
    if(username=== undefined){
        console.log("Please Enter a username");
        return
    }
    return `${username} just logged in.`
}
// console.log(loginUserMessage('disha'))
// console.log(loginUserMessage())


function calculateCartPrice(val1, ...num1){  // Rest operator
    return num1
}
// console.log(calculateCartPrice(300,600,500))


const user ={
    username: 'disha',
    price: 499
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
// handleObject({
//     username: 'sunny',
//     price: 399
// })

const myNewArray = [200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([100,400,600]))

