//object literals
const mysym=Symbol("key1")
const jsuser={
    name:"shiv kumar",
    "full name":"shiv kumar gurjar",
    location:"jaipur",
    email:"shiv@gmail.com",
    islogin:false,
    lastlogindays:["sunday","tuesday"],
    [mysym]:"mykey1"
}
console.log(jsuser.email)
console.log(jsuser["email"])
console.log(jsuser["full name"])
console.log(jsuser[mysym])

//jsuser.email="shiv@chat.com";
//Object.freeze(jsuser)
//jsuser.email="shiv@bhandar.com"
//console.log(jsuser)
console.log("        ********         ")
jsuser.greetings=function(){
    console.log("hello user how");
}
console.log(jsuser.greetings)
console.log(jsuser.greetings())

jsuser.greetings2=function(){
    console.log(`hello user how ${this.name}`);
}
console.log(jsuser.greetings2())