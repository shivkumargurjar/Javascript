const form=document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const result=document.querySelector('#result');
    if(height<=0||isNaN(height)){
        result.innerHTML="Enter valid height";
    }
    else if(weight<=0||isNaN(weight)){
        result.innerHTML="Enter valid height";
    }
    else{
        const bmi=( weight/ ( (height/100)*(height/100) ) ).toFixed(4);
        let meassage;
        if(bmi<18) meassage="Underweight"
        else if(bmi>24.9) meassage="Overweight"
        else meassage="Normal"
        result.innerHTML=`Your BMI is ${bmi} which is ${meassage}`;
    }
})