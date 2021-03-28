alert("Please Click 'OK' to continue");
{/* <form name="bmiForm">
        Your Weight(kg): <input type="text" name="weight" size="10"><br />
        Your Height(cm): <input type="text" name="height" size="10"><br />
        <input type="button" value="Calculate BMI" onClick="calculateBmi()"><br />
        Your BMI: <input type="text" name="bmi" size="10"><br />
        This Means: <input type="text" name="meaning" size="25"><br />
        <input type="reset" value="Reset" />
        </form>
    <script src="index.js"></script>
    <script language="JavaScript">
        function calculateBmi() { */}
        function calculateBMI(){

        }
        var weight = document.bmi.weight.value
        var height = document.bmi.height.value
        if(weight > 0 && height > 0){	
        var finalBmi = weight/(height/100*height/100)
        document.bmi.bmi.value = finalBmi
        if(finalBmi < 18.5){
        document.bmi.meaning.value = "That you are too thin."
        }
        if(finalBmi > 18.5 && finalBmi < 25){
        document.bmi.meaning.value = "That you are healthy."
        }
        if(finalBmi > 25){
        document.bmi.meaning.value = "That you have overweight."
        }
        }
        else{
        alert("Please Fill in everything correctly")
        }
        
        // //-->
        // </script>