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
                    document.getElementById("bfp-bmi").value =finalBmi.toFixed(2)
                    document.getElementById("bodymass").value =finalBmi.toFixed(2)
                    document.bmicalculator.bmi.value = finalBmi.toFixed(2)
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
            var gender
            function getgender(){
                var gen = document.getElementsByName("m");
                for(i=0; i<gen.length; i++){
                    if (gen[i].checked)
                        gender= gen[i].value
                }
            }
            function CalculateBodyFatPercentage(){
                var age = document.bfpcalculator.age.value
                getgender()
                 //  var gender = document.bfpcalculator.gender-m.value
                if (age>0 && gender=="male")
                    finalbfp = 1.20*finalBmi+(0.23*age)-16.2
                   
                if (age>0 && gender=="female") 
                    finalbfp = 1.20*finalBmi+(0.23*age)-5.4
                
                    // this calculation is for female
                document.bfpcalculator.bfp.value = finalbfp.toFixed(2) 
                document.getElementById("bodyfat").value =finalbfp.toFixed(2)
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
            document.getElementById("bodyfat").value =finalBmi.toFixed(2)


            
            var waist = document.getElementById("waist");
            var height = document.getElementById("height");
            var waist = document.getElementById("waist");
            var age = document.getElementById("age");
           
