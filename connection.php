<?php
$dbhost="localhost";
$dbuser="root";
$dbpass="";
$dbname="login_sample_db"; /* database name*/

/*connect to database*/
if(!$con= mysqli_connect($dbhost,$dbuser, $dbpass,$dbname))
{
  die("It failed to connect!"); /*if we get error */
}
