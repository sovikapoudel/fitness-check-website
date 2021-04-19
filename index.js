// alert("Please Click 'OK' to continue");
var gender
function getgender(){
    var gen = document.getElementsByName("gendername");
    for(i=0; i<gen.length; i++){
        if (gen[i].checked)
            gender= gen[i].value
    }
}



var finalBmi

function CalculateBmi() {
    var weight = document.bmicalculator.weight.value
    var height = document.bmicalculator.height.value
    if(weight > 0 && height > 0){	
        finalBmi = weight/(height/100*height/100)
        document.getElementById("bfp-bmi").value =finalBmi.toFixed(2)
        document.getElementById("bodymass").value =finalBmi.toFixed(2)
        document.getElementById("idw-bmi").value = finalBmi.toFixed(2)
        document.bmicalculator.bmi.value = finalBmi.toFixed(2)
        if(finalBmi <= 18.5){
            document.bmicalculator.meaning.value = "You are considered Underweight."
        }
        if(finalBmi > 18.5 && finalBmi <= 25){
            document.bmicalculator.meaning.value = "You are considered healthy."
        }
        if(finalBmi > 25 && finalBmi <= 30){
            document.bmicalculator.meaning.value = "You are considered overweight."
        }
        if(finalBmi > 30){
            document.bmicalculator.meaning.value = "You are considered obese."
        }
    }
    else{
        alert("Please provide the correct information!");
    }
}

function CalculateBodyFatPercentage(){
    var age = document.bfpcalculator.age.value
    getgender()
        //  var gender = document.bfpcalculator.gender-m.value
    if (age>0 && gender=="male"){
        finalbfp = 1.20*finalBmi+(0.23*age)-16.2
    }  
    if (age>0 && gender=="female") {
        finalbfp = 1.20*finalBmi+(0.23*age)-5.4
    }
        // this calculation is for female
    document.bfpcalculator.bfp.value = finalbfp.toFixed(2) 
    document.getElementById("bodyfat").value =finalbfp.toFixed(2)
    if (finalbfp<8){
        document.bfpcalculator.meaning.value = "Your Body Fat Percentage is considered low"
    }
    if( finalbfp > 8 && finalbfp < 17 && gender== "male" ){
        document.bfpcalculator.meaning.value = "Yay! You have healthy body fat percentage"
    }
    if( finalbfp > 17 && gender== "male" ){
        document.bfpcalculator.meaning.value = "Your body fat percentage considered higher"
    }

    if( finalbfp > 8 && finalbfp < 25 && gender == "female" ){
        document.bfpcalculator.meaning.value = "Yay! You have healthy body fat percentage"
    }
    if( finalbfp > 25 && gender== "female" ){
        document.bfpcalculator.meaning.value = "Your body fat percentage considered higher "
    }  
}
// to concatinate use "+"  sign
    

document.getElementById("bodyfat").value =finalBmi.toFixed(2)

var finalweight
function calculateidealweight() {
    var height = document.bmicalculator.height.value
    getgender()
    if (height>0) {

        
        if (gender=="male"){
            finalweight = 50+(0.91*(height-152.4))
        }  
        if (gender=="female") {
            finalweight = 45.5+(0.91*(height-152.4))
        }
        document.idwcalculator.idw.value=finalweight.toFixed(2)
        document.getElementById("bodyweight").value=finalweight.toFixed(2)
        document.idwcalculator.meaning.value = "Good luck achieving your ideal weight!"
    
    }
    else {
        alert("Please provide the correct information!"); 
    }
}
document.getElementById("bodyweight").value=finalweight.toFixed(2)

