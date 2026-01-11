let mydate=new Date()
console.log(typeof(mydate))
console.log(mydate)
console.log(mydate.toString())
console.log("DateString: "+mydate.toDateString())
console.log("LocaleDateString: "+mydate.toLocaleDateString())

let newdate=new Date(2025,11,29);
console.log(newdate.toLocaleDateString())
console.log(newdate.toLocaleString())

console.log("\n*******")
let newestdate=new Date(2025,11,29,6,57);
console.log(newestdate.toLocaleString())

console.log("\n*******")
let adate=new Date("2025-12-29")
console.log(adate.toLocaleDateString())

console.log("\n*******")
let timestamp= Date.now()
console.log(timestamp);
console.log(adate.getTime())

console.log("\n in seconds: *******")
console.log(Math.floor(Date.now()/1000))

console.log("\n month,day,year...: *******")
let dateagain=new Date();
console.log("month: "+ (dateagain.getMonth()+1))
console.log("day: "+dateagain.getDay())

console.log("\n*******")
console.log(dateagain.toLocaleString('default',{weekday:"long"}))