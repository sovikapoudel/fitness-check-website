<?php
session_start();
  include("connection.php");
    include("function.php");

    $user_data= check_login($con); /* check_login($con) is a finction and is in function.php*/

 ?>
 <!DOCTYPE html>
 <html lang="en" dir="ltr">
   <head>
     <meta charset="utf-8">
     <title>mywebsite</title>
   </head>
   <body>
     <a href="logout.php"></a>
     <h1>This is a index page</h1>
     <br>
     hello,username.

   </body>
 </html>
