const northstates=["kashmir","punjab","up","rajasthan"]
const southtates=["andhra","karnatak","Tamil","Kerala"]

northstates.push(southtates);
console.log(northstates)
console.log(northstates[4][3])

const northstates1=["kashmir","punjab","up","rajasthan"]

console.log("concat: ")
const allstates=northstates1.concat(southtates)
console.log(allstates)

console.log("spread operator: ")
const allstatesnew=[...northstates1,...southtates]
console.log(allstatesnew)

console.log("flat: ")
const arr1=[1,2,3,[4,5,6],[7,8,[9,10]]]
const arr2=arr1.flat(Infinity)
console.log(arr2)

console.log("           ***           ")
console.log(Array.isArray("Shiv Kumar"))
console.log(Array.from("gurjar"))
console.log(Array.from({name:"shiv"}))

console.log("           **********     ")
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))