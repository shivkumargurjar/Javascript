const name="shiv"
const midname="kumar"
console.log(name+midname)

console.log(`hello friend my name is ${name} and my midname is ${midname}`)


const newName=new String('Rajasthan')
console.log(newName[0])

console.log(newName.length);
console.log(newName.toUpperCase());
console.log(newName.charAt(5));
console.log(newName.indexOf('j'));


const newstring=newName.substring(0,4);
console.log(newstring);
const anotherstring=newName.slice(-8,4);
console.log(anotherstring);

const morestring="   rajasthan     ";
console.log(morestring);
console.log(morestring.trim());


const url="https://shivkumar.com/shiv%20kumar";
console.log(url.replace("%20","-"));

const again="shiv-kumar-gurjar";
console.log(again.split("-"));