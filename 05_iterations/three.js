const obj={
    "js":"javascript",
    "py":"python",
    "cpp":"c++"
}
for(const key in obj){
    console.log(obj[key])
}
console.log("             **********       ")
const states=['raj','bihar','gujrat']
states.forEach(function(val){
    console.log(val);
})

console.log("    ******       ")
const dist=['jaipur','sikar','ajmer']
dist.forEach((val)=>
    {
    console.log(val);
})

console.log("        ***************        ")
const villages=['bichpuri','devipura','bhanipura']
function printme(val1){
    console.log(val1)
}
villages.forEach(printme)

console.log("        ***************        ")
const countries=['india','usa','russia']
countries.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

console.log("        ***************        ")
const languages=[
    {
        languagename:"c++",
        languagefile:"cpp"
    },
    {
        languagename:"python",
        languagefile:"py"
    },
    {
        languagename:"javascript",
        languagefile:"js"
    }
]

languages.forEach((item)=>{
    console.log(item.languagename+"'s file name is ",item.languagefile);
}
)