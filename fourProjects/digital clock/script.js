const clk = document.querySelector('#clock');
setInterval(function(){
    let date=new Date()
    clk.innerHTML=date.toLocaleTimeString();
},1000)