<?php
  $data_file= fopen("saved.txt", "a")
  $name= $_POST["id"];
  $age=$_POST["value"];
  $text_to_write= $id. "   " . $value;

  fwrite($data_file, $text_to_write);
  fclose($data_file);
  ?>