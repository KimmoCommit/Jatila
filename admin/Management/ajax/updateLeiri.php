<?php

require_once '../core/init.php';



			$usedb = new LeiriPDO();
			$id = $_POST["id"];
			$name = $_POST["name"];
			$startTime = $_POST["startTime"];
			$endTime = $_POST["endTime"];
			$price = $_POST["price"];
			$teacher = $_POST["teacher"];
			$isFull = $_POST["isFull"];

			$leiri = new Leiri();
			$leiri->setId($id);
			$leiri->setName($name);
			$leiri->setStartTime($startTime);
			$leiri->setEndTime($endTime);
			$leiri->setPrice($price);
			$leiri->setTeacher($teacher);
			$leiri->setIsFull($isFull);

			

			$usedb->updateLeiri($leiri);
		

?>