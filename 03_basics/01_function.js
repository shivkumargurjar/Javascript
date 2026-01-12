function sayMyName(){
    console.log("s")
    console.log("h")
    console.log("i")
    console.log("v")
}
sayMyName()

function addTwoNumbers(num1,num2){
    console.log(num1+num2)
}
addTwoNumbers(100,102)

function addTwoNumbers2(num1,num2){
    return num1+num2
}
const result=addTwoNumbers2(55,56);
console.log("Result: ",result)

function loginuserMessage(username){
    if(!username){
        return `please enter a user name`
    }
    return `${username} just logged in`
}
console.log(loginuserMessage("hitesh"))
console.log(loginuserMessage())

console.log("\n")
function loginuserMessage(username="shiv"){
    if(!username){
        return `please enter a user name`
    }
    return `${username} just logged in`
}
console.log(loginuserMessage("hitesh"))
console.log(loginuserMessage())

console.log("\n")
function addCartPrice(val1,val2,...num1){
    return num1
}
console.log(addCartPrice(100,200,300,400,500,600,700))

console.log("      ********      ")
const user={
    username:"shiv kumar",
    price:"909"
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)
handleObject(
    {
        username:"gurjar",
        price:"910"
    }
)