<!--
	uleague.php for regenmantel
	Copyright 2014-2022 regenmantel, All rights reserved
-->
<?php
$title = "uleague - regenmantel";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <!-- <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->

	<title><?php echo $title;?></title>

	<link rel="icon" href="assets/img/icons/crown.jpg">
    <link rel="stylesheet" type="text/css" href="assets/css/uleague.css">

    <link href="https://fonts.googleapis.com/css?family=Exo+2:300,300italic,200,200italic,400,400italic,500,500italic,600,600italic,700,700italic,900" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet" type="text/css">
	<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
</head>
<body>
    <!--https://developer.riotgames.com/docs/lol#general_game-constants-->
    <script src="assets/js/uleague.js"></script>  
    <span id="links">
		&copy; 2022 regenmantel, All rights reserved. <br><br>
    </span>
    <div class="championImage">
		<img src="assets/img/loading/Sivir_5.jpg" id="randomChampion" alt="RNG Champion">
		<p id="randomChampionString">Click Button to roll a random Champion</p>
        <button type="button" onclick="GetRandomImage()">Random Champion</button>
    </div>
    <!-- http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ahri_0.jpg-->
</body>
</html>