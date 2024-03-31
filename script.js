function calculateBMI(){
    let heigth = document.getElementById("height").value
    let weight = document.getElementById("weight").value

    console.log(weight / (heigth * heigth));

    if(isNaN(heigth) || isNaN(weight) || weight <= 0 || heigth <= 0){
        document.getElementById("result").innerHTML = "Please enter valid weight and height."
        return
    }

    let bmi = weight / (heigth * heigth)
    let result = "Your bmi is " + bmi.toFixed(2) + ". "


    if(bmi < 18.5){
        result += "You are underweigth."
    }
    else if(bmi >= 18.5 && bmi < 25){
        result += "you have a normal weigth."
    }
    else if(bmi >= 25 && bmi < 30){
        result += "You are over weigth."
    }
    else{
        result += "You are obese."
    }

    document.getElementById("result").innerHTML = result
}