const email="shiv@gmail.com"
if(email){
    console.log("got email")
}
else{
    console.log("did not get email");
}
//false -> false,0,-0,BigInt 0n,"",null,undefined,NaN
//truth -> "0",'false'," ",[],{},function(){}

const obj={ };
if(Object.keys(obj).length==0){
    console.log("object is empty");
}
//Nulllish colescing operator
val1=5??null
val2=null??45;
console.log(val1);
console.log(val2);