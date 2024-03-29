<?php
session_start();
include("connection.php");
include("functions.php");

    $user_data= check_login($con); /* check_login($con) is a finction and is in function.php*/

 ?>
 <!DOCTYPE html>
 <html lang="en">

 <head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Fitness Check</title>
   <link rel="stylesheet" href="bootstrap.css">
   <link rel="stylesheet" href="style.css">
   <link rel="stylesheet" href="aboutus.css">
   <link rel="stylesheet" href="login.css">
   <script src="bootstrap.js"></script>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
   <link rel="stylesheet" href="social.css">
 </head>
 <body>
   <script src="index.js"></script>
   <div id="fb-root"></div>
   <h2> </h2>
   <!-- <script type ="text/javascript" src="web.js"></script> -->
   <div class="container-fluid content-container">
     <div class="row">
       <div class="col">
         <div class="sidebar">
           <nav>
             <div class="sidebar-header">
               <h2><span>M</span>ENU</h2>
             </div>
             <ul class="links">
               <li><a href="#">home</a></li>
               <li><a href="https://tintyoga.com/" target="_blank">health and fitness</a></li>
               <li><a href="https://www.911.gov/" target="_blank">help</a></li>
               <li><a href="https://www.healthline.com/" target="_blank"> health tips</a></li>
               <li><a href="aboutus.html" target="_blank"> About US</a></li>
             </ul>
             <p>
               <br>
               <table>
                 <h3 class="sidebar-header2"> Your Summary</h3>
                 <tr>
                   <td><label>Body Mass Index</label></td> <br>
                   <td><input class="textbox" type="number" id="bodymass" value="" /> kg<br></td>
                 </tr>
                 <tr>
                   <td><label>Body Fat Percentage</label></td>
                   <td><input class="textbox" type="number" id="bodyfat" value="" /> %</td>
                 </tr>
                 <tr>
                   <td><label>Ideal Body Weight</label></td>
                   <td> <input class="textbox" type="number" id="bodyweight" value="" /> kg </td>
                 </tr>
               </table>
               <br>
             </p>
           </nav>
         </div>
       </div>
       <div class="col">
         <div class="heading">
           <h3 class="heading">Welcome to Fitness Check!</h3>
           <!-- <img src = "background-image.jpeg" class = "center" width = "300 height = "70/> -->
         </div>

         <div class="calculator">

           <div class="accordion" id="accordionExample">
             <div class="accordion-item">
               <h2 class="accordion-header" id="headingOne">
                 <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                   aria-expanded="true" aria-controls="collapseOne">
                   <h3 class= "calc-title"> Calculate your Body Mass Index</h3>
                 </button>
               </h2>
               <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                 data-bs-parent="#accordionExample">
                 <div class="accordion-body">
                   <p>
                   <ul>
                     <form name="bmicalculator">
                       <table>
                         <th>
                           <tr>Your Weight(kg): </tr> <input type="number" name="weight" size="10"><br />
                           <tr>Your Height(cm)</tr>: <input type="number" name="height" size="10"><br />
                           <br><center> <input type="button" value="Calculate BMI" onClick="CalculateBmi()"></center><br/>
                           <br> <tr> BMI: </tr> <input type="text" name="bmi" size="10"><br />
                           This Means: <input type="text" name="meaning" size="25">
                           <input type="reset" value="Reset" />
                         </th>
                       </table>
                     </form>
                   </ul>
                   </p>
                   <p>
                 </div>
               </div>
             </div>
           </div>
           <div class="accordion" id="accordionExample">
             <div class="accordion-item">
               <h3 class="accordion-header" id="headingOne">
                 <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                   aria-expanded="true" aria-controls="collapseOne">
                   <h3 class= "calc-title"> Calculate your Body Fat Percentage</h3>
                 </button>
               </h3>
               <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                 data-bs-parent="#accordionExample">
                 <div class="accordion-body">
                   <p>
                   <form name="bfpcalculator">
                     <table>
                       Your BMI: <input id="bfp-bmi" type="number" name="BMI" size="10"><br />
                       Your Age: <input type="number" name="age" size="10"><br /><br>
                       Your Gender: <input type="radio" name="gendername" value="male" size="10"> Male
                       <input type="radio" name="gendername" value="female" size="10"> Female<br />
                       <br>
                     </table>
                     <input type="button" value="Calculate Body Fat Percentage" onClick="CalculateBodyFatPercentage()"><br />
                     <br> Your Body fat percentage: <input type="text" name="bfp" size="10"><br />
                     This Means: <input type="text" name="meaning" size="25">
                     <input type="reset" value="Reset" />
                   </form>
                   </p>
                 </div>
               </div>
             </div>
           </div>

           <div class="accordion" id="accordionExample">
             <div class="accordion-item">
               <h2 class="accordion-header" id="headingOne">
                 <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                   aria-expanded="true" aria-controls="collapseOne">
                   <h3 class= "calc-title"> Calculate your Ideal Weight</h3>
                 </button>
               </h2>
               <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                 data-bs-parent="#accordionExample">
                 <div class="accordion-body">
                   <p>
                     <form name="idwcalculator">
                       <table>
                           Your BMI: <input id="idw-bmi" type="number" name="BMI" size="10"><br />
                           <br>
                           <input type="button" value="Calculate Ideal Weight" onClick="calculateidealweight()"><br />
                           <br>
                           <tr> Ideal Weight: </tr> <input type="text" name="idw" size="10"><br />
                           <input type="text" name="meaning" size="25">
                           <input type="reset" value="Reset" />
                       </table>
                     </form>
                   </p>

                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
       <div class="col">
         <div class="add1">
           <ul>
             <li class="add2">Hello There!</li><br>
              <li class="add2">Account </li><br>
             <li class="add2">History </li><br>
             <li> <button class="btn-secondary" onclick="window.open('index.html', '_self')">  Logout</a> </button></li>

           </ul>
             <div>
               <a href="http://www.facebook.com" target="_blank" class="fa fa-facebook"></a>
               <a href="http://www.twitter.com" target="_blank" class="fa fa-twitter"></a>
               <a href="http://www.google.com" target="_blank" class="fa fa-google"></a>
               <a href="http://www.linkedin.com" target="_blank" class="fa fa-linkedin"></a>
               <a href="http://www.youtube.com" target="_blank" class="fa fa-youtube"></a>
               <a href="http://www.instragram.com" target="_blank" class="fa fa-instagram"></a>
             </div>
          </div>
        </div>



           <div id="id02" class="modal">
             <form class="modal-content animate" action="/action_page.php" method="post">
               <div class="imgcontainer">
                 <span onclick="document.getElementById('id02').style.display='none'" class="close"
                   title="Close Modal">&times;</span>
                 <img src="health.png" alt="Avatar" class="avatar">
               </div>


             <button type="submit">Signup</button>
               </div>

               </div>
             </form>
           </div>

         </div>
       </div>
     </div>
   </div>
   <div class="footer"><br>NOTE: This is for calculating normal health. Please call 911 for serious issue! </h5></div>

 </body>
 </html>
