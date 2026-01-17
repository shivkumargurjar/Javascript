const mynums=[1,2,3,4,5,6,7,8,9,11,12,13,14]
const newnums=mynums.map((num)=>{
    return num+10
})
console.log(newnums);

const numbers=mynums.map((num)=>num*10).map((num)=>num-10).filter((num)=>num>=50)
console.log(numbers)