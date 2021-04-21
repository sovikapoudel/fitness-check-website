<?php
session_start();
    include("connection.php");
    include("functions.php");

    if ($_SERVER['REQUEST_METHOD']== "POST")
     {
      // if we post something
      $user_name=$_POST['user_name'];
      $password=$_POST['password'];

      if (!empty ($user_name) && !empty ($password) && !is_numeric ($user_name))
       {
         //for saving to database
         $user_id=random_num(20);
          $query ="insert into users (user_id, user_name, password) value ('$user_id', '$user_name', '$password')";
          mysqli_query($con, $query); //to save

        header("Location: login.php");// redirect the user in login.php
       die;

      }else {
        echo "Please enter valid info";
      }

    }
 ?>
 <!DOCTYPE html>
 <html lang="en" dir="ltr">
   <head>
     <meta charset="utf-8">
     <title>Signup</title>
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
        <div style="font-size: 20px; margin:10px;color:white;">Signup</div>

        <input id="text" type="text" name="user_name"><br><br>
          <input id="text" type="password" name="password"><br><br>

          <input id="button" type="submit" value="Signup"><br><br>

          <a href="login.php ">Click To Login</a>

      </form>

    </div>

   </body>
 </html>
