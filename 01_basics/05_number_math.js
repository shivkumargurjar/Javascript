//***************numbers****** *
const score=400
console.log(score)

const balance=new Number(400)
console.log(balance)

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const newNumber=123.9875
console.log(newNumber.toPrecision(5));
console.log(newNumber.toPrecision(3));

const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'))


//****mats********* */
console.log("**********from here maths*******");
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(5.1))
console.log(Math.floor(5.9))
console.log("minimum value "+Math.min(-1,-2,-3,0,-4))
console.log("maximum value "+Math.max(-1,-2,-3,0,-4))

console.log("*******random:-")
console.log(Math.random())
console.log((Math.random()*10)+1)
const max=20
const min=10
console.log(Math.floor((Math.random()*(max-min+1))+min))
