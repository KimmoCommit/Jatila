<?php



//$detail  = $_POST["detail"];
//$id		= $_POST["id"];

$detail = $_POST["detail"];
$id = $_POST["id"];
$newDetail = $_POST["newdetail"];

$jsonurl = "../../res/leirit.json";
$file = file_get_contents($jsonurl);
$data = json_decode($file, true);
unset($file);

foreach ($data as $key => $leiri) {
 
 	if($leiri["id"] === $id){
 			$data[$key][$detail] = $newDetail;

  }
}


file_put_contents($jsonurl,json_encode($data));
unset($data);


?>