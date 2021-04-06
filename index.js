// alert("Please Click 'OK' to continue");

            var finalBmi
             function CalculateBodyFatPercentage(){
                var age = document.bfpcalculator.age.value
                //  var gender = document.bfpcalculator.gender.value
                if (age>0 ); 
                // && gender==male or female (need to add this part)
                    finalbfp = 1.20*finalBmi+(0.23*age)-16.2
                    // this calculation is for male
                    document.bfpcalculator.bfp.value = finalbfp

                        if( finalbfp > 8 && finalbfp < 19 ){
                            document.bfpcalculator.meaning.value = "Your body fat percentage is too high "
                        }
                        if( finalbfp > 19){
                            document.bfpcalculator.meaning.value = "Your body fat percentage is too high "
                        }

                else{
                            alert("Please provide the correct information!");
                        }

             }
            
            function CalculateBmi() {
                var weight = document.bmicalculator.weight.value
                var height = document.bmicalculator.height.value
                if(weight > 0 && height > 0){	
                    finalBmi = weight/(height/100*height/100)
                    document.getElementById("bfp-bmi").value =finalBmi
                    document.bmicalculator.bmi.value = finalBmi
                    if(finalBmi < 18.5){
                        document.bmicalculator.meaning.value = "That you are too thin."
                    }
                    if(finalBmi > 18.5 && finalBmi < 25){
                        document.bmicalculator.meaning.value = "That you are healthy."
                    }
                    if(finalBmi > 25){
                        document.bmicalculator.meaning.value = "That you have overweight."
                    }
                }
                else{
                    alert("Please provide the correct information!");
                }
            }


            
            var waist = document.getElementById("waist");
            var height = document.getElementById("height");
            var waist = document.getElementById("waist");
            var age = document.getElementById("age");
           
