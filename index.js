// alert("Please Click 'OK' to continue");
var gender
function getgender(){
    var gen = document.getElementsByName("m");
    for(i=0; i<gen.length; i++){
        if (gen[i].checked)
            gender= gen[i].value
    }
}


var finalBmi
// function CalculateBodyFatPercentage(){
// var age = document.bfpcalculator.age.value
//     //  var gender = document.bfpcalculator.gender.value
//     if (age>0 ); 
//     // && gender==male or female (need to add this part)
//         finalbfp = 1.20*finalBmi+(0.23*age)-16.2
//         // this calculation is for male
//         document.bfpcalculator.bfp.value = finalbfp

//             if( finalbfp > 8 && finalbfp < 19 ){
//                 document.bfpcalculator.meaning.value = "Your body fat percentage is too low "
//             }
//             if( finalbfp > 19 && finalbfp <25 ){
//                 document.bfpcalculator.meaning.value = "Your body fat percentage is considered normal "
//             }
//             if( finalbfp >25 ){
//                 document.bfpcalculator.meaning.value = "Your body fat percentage is considered high "  
//             }

//     else{
//                 alert("Please provide the correct information!");
//             }

//     }

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
            document.bmicalculator.meaning.value = "That you are considered Underweight."
        }
        if(finalBmi > 18.5 && finalBmi <= 25){
            document.bmicalculator.meaning.value = "That you are considered healthy."
        }
        if(finalBmi > 25 && finalBmi <= 30){
            document.bmicalculator.meaning.value = "That you are considered overweight."
        }
        if(finalBmi > 30){
            document.bmicalculator.meaning.value = "That you are considered obese."
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
    if( finalbfp > 8 && finalbfp < 19 ){
        document.bfpcalculator.meaning.value = "Your body fat percentage is considerd healthy "
    }
    if( finalbfp > 19){
        document.bfpcalculator.meaning.value = "Your body fat percentage is considered high "
    }

    
}
document.getElementById("bodyfat").value =finalBmi.toFixed(2)

var finalweight
function calculateidealweight() {
    var height= document.idwcalculator.height.value
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


let movies = [];
ev.preventDefault();  
let movie = {
    id: Date.now(),
    title: document.getElementById('calc').value,
    year: document.getElementById('reset').value
}
movies.push(movie);
document.forms[0].reset(); 
console.warn('added' , {movies} );
let pre = document.querySelector('#msg pre');
pre.textContent = '\n' + JSON.stringify(movies, '\t', 2);

localStorage.setItem('MyMovieList', JSON.stringify(movies) );

document.addEventListener('DOMContentLoaded', ()=>{
document.getElementById('btn').addEventListener('click', addMovie);
});
var modal = document.getElementById('id01');
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}