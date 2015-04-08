<?php




?>


<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Administrator</title>
</head>
<body>
	<style>
		#leirit-container{
			width:80%;
			height:auto;
			display: block;
			margin:0 auto;
			border:1px dashed grey;
		}

		.leiri-title{
			font-weight: bold;
		}

/*[class*="leiri-"]{
	display:inline-block;
	margin-left:5px;
}*/

.leiri-row{
	display:block;
}

.leiri-row > div {
	display:inline-block;
	margin-left: 5px;
}

</style>


<div id="leirit-container">

</div>


<link rel="stylesheet" type="text/css" href="css/styles.css">
<script src="../../lib/jquery-1.11.1.min.js"></script>

<script type="text/javascript">

	$(function(){

		



		$.getJSON("ajax/getAllLeirit.php", function(data, status){
			$.each(data, function(key, value){

				var leiriNimi = value.leiri.name;
				var leiriHinta = value.leiri.price;
				var leiriAloitus = value.leiri.startTime;
				var leiriLopetus = value.leiri.endTime;
				var leiriOpettaja_etunimi = value.leiri.teacherFname;
				var leiriOpettaja_sukunimi  = value.leiri.teacherLname;
				var leiriIsFull = value.leiri.isFull;

				var domRow = $("<div/>", {"class":"leiri-row"});
				var domLeiriTitle = $("<div/>", {"class":"leiri-title"}).append(leiriNimi);
				var domLeiriStartTime = $("<div/>", {"class":"leiri-startTime"}).append(leiriAloitus);
				var domLeiriEndTime = $("<div/>", {"class":"leiri-endTime"}).append(leiriLopetus);
				var domLeiriPrice = $("<div/>", {"class":"leiri-price"}).append(leiriHinta);
				var domLeiriOpettaja = $("<div/>", {"class":"leiri-teacher"}).append(leiriOpettaja_etunimi + " " + leiriOpettaja_sukunimi);

				domRow
				.append(
					domLeiriTitle,
					domLeiriStartTime,
					domLeiriEndTime,
					domLeiriPrice,
					domLeiriOpettaja
					);


				domRow.children("[class*='leiri-']").click(function(ev){
					$(ev.target).attr("contenteditable","true");
				});


				$("#leirit-container").append(domRow);
			});


});





		});//doc rdy




</script>
</body>
</html>