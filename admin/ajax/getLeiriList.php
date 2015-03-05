<?php


$jsonurl = "../../res/leirit.json";
$json = file_get_contents($jsonurl,0,null,null);
$json_output = json_decode($json,true);


		foreach ($json_output as $leiri ){
			$name = $leiri['name'];
			$time = $leiri['time'];
			$price = $leiri['price'];
			$teacher = $leiri['teacher'];
			echo "
				<tr class='leiri'>
					<td class='leiri-name' data-key='name'>$name</td>
					<td class='leiri-time' data-key='time'>$time</td>
					<td class='leiri-price' data-key='price'>$price</td>
					<td class='leiri-teacher' data-key='teacher'>$teacher</td>
				</tr>
				";
			}
?>