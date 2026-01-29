const hex="0123456789ABCDEF"
function randColor(){
    let color='#';
    for(let i=0;i<6;i++){
        const randnum=Math.floor(Math.random()*16);
        color+=hex[randnum];
    }
    return color;
}

let intervel=null;
const start=document.querySelector('#start');
start.addEventListener('click',function(){
    if(!intervel){
        intervel=setInterval(changebg,1000);
    }
})
function changebg(){
        document.body.style.backgroundColor=randColor();
}

const stop=document.querySelector('#stop');
stop.addEventListener('click',function(){
    clearInterval(intervel);
    intervel=null;
})