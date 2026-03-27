


const calculate = ()=>{

    let height=document.getElementById("height").value
    let weight=document.getElementById("weight").value
    height=height/100;

    const bmi=weight/(height*height)
    const result=document.getElementById("result")
    result.innerText="Your BMI is " + bmi.toFixed(2)
    
    const condition=document.getElementById("condition")
    if(bmi<18.5){
        condition.innerText="Underweight"
    }else if(bmi<24.9){
        condition.innerText="Normal weight"
    }else if(bmi<29.9){
        condition.innerText="Over weight"
    }else if(bmi<35){
        condition.innerText="Obesity"
    }else{
        condition.innerText="Severe obesity"
    }

    document.getElementById("height").value=""
    document.getElementById("weight").value=""
}