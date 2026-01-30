fetch('https://api.github.com/users/shivkumar')
.then((response=>{
    return response.json();
})).then((data)=>{
    console.log(data.login)
    console.log(data.followers)
}).catch((error)=>{
    console.log(error);
})