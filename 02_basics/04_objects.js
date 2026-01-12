//const tinderuser=new object{}
const tinderuser={}
console.log(tinderuser)
tinderuser.id="123abd"
tinderuser.name="shiv kumar"
tinderuser.isloggedin=false
console.log(tinderuser)

console.log("     ****       ")
const regularuser={
    email:"shiv@gmail.com",
    fullname:{
        userfullname:{
            firstname:"shiv kumar",
            lastnmae:"gurjar"
        }
    }
}
console.log(regularuser)
console.log(regularuser.fullname.userfullname.lastnmae)

console.log("\n*******************\n")
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"e",6:"f"}
console.log("thik tarika nahi hai merge ka: ",obj1,obj2,obj3)
const obj4=Object.assign({},obj1,obj2,obj3)
console.log(obj4)

console.log("********best tarika merge ka: ********")
const obj5={...obj1,...obj2,...obj3}
console.log(obj5)

console.log("\n arry of objects: ")
const users=[
    {
    name:"shiv kumar",
    "full name":"shiv kumar gurjar",
    location:"jaipur",
    email:"shiv@gmail.com"},
    {
    name:"shiv kumar",
    "full name":"shiv kumar gurjar",
    location:"jaipur",
    email:"shiv@gmail.com"},
]
console.log(users[1]["full name"])

console.log("\n*****************")
console.log(tinderuser)
console.log("keys: ",Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))
console.log(tinderuser.hasOwnProperty('isloggedin'))