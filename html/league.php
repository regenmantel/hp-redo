<!--
	league.php for regenmantel
	Copyright 2019-2022 regenmantel, All rights reserved
-->
<?php
$title = "league - regenmantel";
$buttonText = "Random Champion";
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title><?php echo $title;?></title>

	<link rel="icon" href="assets/img/icons/crown.jpg">
	<link rel="stylesheet" type="text/css" href="assets/css/league.css">

	<link href="https://fonts.googleapis.com/css?family=Exo+2:300,300italic,200,200italic,400,400italic,500,500italic,600,600italic,700,700italic,900" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet" type="text/css">
	<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
</head>
<body style="background: #0e0e0e;">
	<script src="assets/js/league.js"></script>
	<div class="championImage">
		<button onclick="GetRandomImage()">
		<div class="left"></div>
			<?php echo $buttonText;?>
			<div class="right"></div>
		</button>
	</div>
	<div>
		<img src="assets/img/champion/None.png" witdh="120" height="120" id="randomChampion" alt="RNG Champion">
		<p id="randomChampionString"></p>
	</div>
</body>
</html>