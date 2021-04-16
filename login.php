<?php

 ?>
 <!DOCTYPE html>
 <html lang="en" dir="ltr">
   <head>
     <meta charset="utf-8">
     <title>login</title>
   </head>
   <body>
    <style type="text/css">
      #text{
        height: 25px;
        border-radius: 5px;
        padding: 4px;
        border: solid thin #aaa;
        width: 250px;
      }
      #button{
        padding: 10px;
        width: 100px;
        color: white;
        background-color: red;
        border: none;
      }
      #box{
        background-color: grey;
        margin: auto;
        width: 300px;
        padding; 20px;
      }

    </style>
    <div id="box">

      <form method="post">
        <div style="font-size: 20px; margin:10px;color:white;">Login</div>

        <input id="text" type="text" name="user_name"><br><br>
          <input id="text" type="password" name="password"><br><br>

          <input id="button" type="submit" value="Login"><br><br>

          <a href="signup.php ">Click To Signup</a>

      </form>

    </div>

   </body>
 </html>
