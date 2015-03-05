<?php


$jsonurl = "../res/leirit.json";
$json = file_get_contents($jsonurl,0,null,null);
$json_output = json_decode($json,true);




?>

<!DOCTYPE html>
<html>
<head>
	<title>Administrator site of Jatila</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

	<script type="text/javascript" data-main="js/bootstrap" src="js/libs/require.js"></script>
	
	<link rel="stylesheet" type="text/css" href="css/styles.css">
</head>

<body>
	<table id="leiri-table">
		<?php
		foreach ($json_output as $leiri ){
			$name = $leiri['name'];
			$startTime = $leiri['startTime'];
			$endTime = $leiri['endTime'];
			$price = $leiri['price'];
			$teacher = $leiri['teacher'];
			$id = $leiri['id'];
			echo "
				<tr class='leiri'>
					<td class='leiri-name info' spellcheck=false data-key='name'>$name</td>
					<td class='leiri-time info' spellcheck=false data-key='startTime'>$startTime</td>
					<td class='leiri-time info' spellcheck=false data-key='endTime'>$endTime</td>
					<td class='leiri-price info' spellcheck=false data-key='price'>$price</td>
					<td class='leiri-teacher info' spellcheck=false data-key='teacher'>$teacher</td>
					<td class='leiri-delete'><button type='button' id='$id'>Poista</button></td>
				</tr>
				";
			}
		?>
	</table>


<h2>Luo uusi leiri</h2>
<table>
	<tr>
		<th>Nimi</th>
		<th>Aloitus</th>
		<th>Lopetus</th>
		<th>Hinta</th>
		<th>Vetäjä</th>
		<th></th>
	</tr>
	<tr>
		<form id="newLeiri">
			<td><input type="text" name="newLeiriName"></td>
			<td><input type="text" name="newLeiriStartTime"></td>
			<td><input type="text" name="newLeiriEndTime"></td>
			<td><input type="text" name="newLeiriPrice"></td>
			<td><input type="text" name="newLeiriTeacher"></td>
			<td><input type="submit" value="Luo"></td>
		</form>
	</tr>

</table>







</body>


</html>