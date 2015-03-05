<?php

$id  = uniqid();
$name = $_POST["newLeiriName"];
$startTime = $_POST["newLeiriStartTime"];
$endTime = $_POST["newLeiriEndTime"];
$price = $_POST["newLeiriPrice"];
$teacher = $_POST["newLeiriTeacher"];

$jsonurl = "../../res/leirit.json";
$file = file_get_contents($jsonurl);
$data = json_decode($file);
unset($file);//prevent memory leaks for large json.
//insert data here
$data[] = array('id'=>$id,'name'=>$name, 'startTime'=>$startTime,'endTime'=>$endTime, 'price'=>$price,'teacher'=>$teacher);
//save the file
file_put_contents($jsonurl,json_encode($data));
unset($data);//release memory
$return["id"] = json_encode($id);
//$return["json"] = json_encode($return);

echo json_encode($return);




?>