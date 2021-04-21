<?php
session_start();
  // include("connection.php");
    include("functions.php");

    if ($_SERVER['REQUEST_METHOD']== "POST")
     {
      // if we post something
      $user_name=$_POST['user_name'];
      $password=$_POST['password'];

      if (!empty ($user_name) && !empty ($password) && !is_numeric ($user_name))
       {
         //read from the database
         $user_id=random_num(20);
          $query ="select * from users where user_name= '$user_name' limit 1";
          $result= mysqli_query($con, $query); //to save

          if ($result)
          {
            if ($result && mysqli_num_rows($result) > 0)
             {
               $user_data=mysqli_fetch_assoc($result);
              if($user_data['password']===$password)
              {
                $_SESSION['user_id']= $user_data['user_id'];
                header("Location: index.php");// redirect the user in login.php
               die;
              }
            }
          }

            echo "The username and password provided is not corret. Please try again later.";

      }else {
        echo "Please enter valid info";
      }
    }

 ?>
 <!DOCTYPE html>
 <html lang="en" dir="ltr">
   <head>
     <link rel="stylesheet" href="style.css">
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
    <div class= "add1" id="box">

      <form method="post">
        <div style="font-size: 20px; color:white;">Please enter username and password to login</div>

        <input id="text" type="text" name="user_name"><br><br>
          <input id="text" type="password" name="password"><br><br>

          <input id="button" type="submit" value="Login"><br><br>

          <a class="add2" href="signup.php ">New user? <br> Click To Signup</a>

      </form>

    </div>

   </body>
 </html>
