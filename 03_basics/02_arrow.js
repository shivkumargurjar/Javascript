const user={
    username:"shiv kumar",
    price:"999",
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`)
    }
}
user.welcomeMessage()
user.username="bahadur"
user.welcomeMessage()

function chai(){
    let username="shiv"
    console.log("this in function: ",this.username);
}
chai()
const chaip=()=>{
    let username="shiv"
    console.log("this in arrow: ",this.username);
}
chaip()

//arrow function:-
console.log("\n     *********arrow function**********    ")
const addtwo=(num1,num2)=>{
    return num1+num2;
}
console.log(addtwo(100,300));

const addthree=(num1,num2,num3)=> (num1+num2+num3)
console.log(addthree(100,200,300));

const myfunction=()=>({username:"shiv",location:"jaipur"})
console.log(myfunction())