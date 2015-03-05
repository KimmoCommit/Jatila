<?php

$id  = $_POST["id"];


$jsonurl = "../../res/leirit.json";
$file = file_get_contents($jsonurl);
$data = json_decode($file, true);
unset($file);


foreach ($data as $key => $leiri) {
 
 	if($leiri["id"] === $id){
 		array_splice($data, $key, 1); 
 	
  }
}


file_put_contents($jsonurl,json_encode($data));
unset($data);


?>