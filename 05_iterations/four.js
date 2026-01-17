const mynums=[1,2,3,4,5,6,7,8,9,10]
const newnums=mynums.filter((num)=>{
    return num>=5
})
console.log(newnums)

const newnums1=[]
const mynums1=[1,2,3,4,5,6,7,8,9,10]
mynums1.forEach ((num)=>{
    if(num>=5) newnums1.push(num)
})
console.log(newnums1)
