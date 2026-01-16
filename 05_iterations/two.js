const arr=[1,2,3,4,5]
for(const x of arr){
    console.log(x)
}
const map=new Map()
map.set("IN","INDIA")
map.set("3330","rajsastan")
map.set("1","UP")
for(const [key,value] of map){
    console.log(key,":-",value)
}