const myarr=[1,3,5,6];
console.log(myarr);
console.log(myarr[0]);

const newarr=["raj","mp","maha"]
console.log(newarr)

const arr= new Array(100,101,102,103);
console.log(arr);

console.log("**********")

arr.push(104);
arr.push(106);
console.log(arr)
arr.pop()
console.log(arr)

arr.unshift(99)
arr.unshift(98)
console.log(arr)
arr.shift()
console.log(arr)

console.log("********")

console.log(arr.includes(90))
console.log(arr.indexOf(103))

const barr=arr.join();
console.log(barr+" is "+typeof(barr))

console.log("slice and splice:")
const arr1=[0,1,2,3,4,5];
const arr1a=arr1.slice(1,3);
console.log("A: ",arr1);
console.log("B: ",arr1a)

const arr1b=arr1.splice(1,3);
console.log("C: ",arr1);
console.log("D: ",arr1b)