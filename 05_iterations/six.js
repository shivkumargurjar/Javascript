const mynums=[1,2,3]
const total=mynums.reduce(function(acc,currval){
    console.log(`acc:${acc}  currval:${currval}`)
    return acc+currval
},0)
console.log(total)

const tot=mynums.reduce((acc,currval)=>(acc+currval),0)
console.log(tot)

console.log("          ******************         ")
const cart=[
    {
        coursename:"js",
        price:3000
    },
    {
        coursename:"py",
        price:9000
    },
    {
        coursename:"cpp",
        price:4000
    },
    {
        coursename:"java",
        price:1000
    }
]
const totalprice=cart.reduce((acc,item)=>(acc+item.price),0)
console.log(totalprice)