<!--
	index.php for regenmantel
	Copyright 2014-2023 regenmantel, All rights reserved
-->
<?php
$name = "regenmantel";
$title = "regenmantel";
//$backgroundImage = "";
$backgroundColor = "white"; 
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title><?php echo $title;?></title>
	<link rel="icon" href="">

	<link rel="stylesheet" type="text/css" href="assets/css/main.css">
	<link rel="stylesheet" type="text/css" href="assets/css/index.css">

	<link href="https://fonts.googleapis.com/css?family=Exo+2:300,300italic,200,200italic,400,400italic,500,500italic,600,600italic,700,700italic,900" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet" type="text/css">
	<script src="https://kit.fontawesome.com/09ce92708a.js" crossorigin="anonymous"></script>
	<style>
		body {
			background-color: <?php echo $backgroundImage; ?>;
		}
		.glitch:before {
			left: -2px;
			margin-left:30px;

			text-shadow: 2px 0 pink;
			animation: noise-anim-2 3s infinite linear alternate-reverse;
			background-color: <?php echo($backgroundcolor); ?>;
		}

		.glitch:after {
			left: 2px;
			margin-left:15px;

			text-shadow: -2px 0 lightblue;
			animation: noise-anim 2s infinite linear alternate-reverse;
			background-color: <?php echo($backgroundcolor); ?>;
		}
	</style>
	<!--
	,
	<script>
		window.onload = function() {
			var checkbox = document.getElementById('cbox');
			var checked = JSON.parse(localStorage.getItem(checkbox));
			document.getElementById('cbox').checked = checked;
		}
	</script>

	-->
</head>
<body>
	<div id="particles-js">
	<script src="assets/js/index.js" defer></script>
	<script src="assets/js/particles.jquery.min.js"></script>
	<script src="assets/js/custom.min.js"></script>
	<script src="assets/js/darkmode.js"></script>
	<div class="navright">
		<!--
		
		<div class="switch-div">
			<label class="switch">
				<input id="cbox" type="checkbox" onclick="validate()"></input>
				<span class="slider round"></span>
			</label>
		</div>
		
		-->
	</div>
	<div class="panel center">
	<h1 class="glitch" data-text="<?php echo $name;?>"><?php echo $name;?></h1>
		<p class="info center" id="info">
			<span id="day"></span>, <span id="date"></span> - <span id="time"></span>
		</p>
		<div class="center ">
			<a href="https://github.com/regenmantel" target="_blank"><i class="fa-brands fa-github fa-beat-fade"></i></a>
			<a href="https://github.com/regenmantel" target="_blank"><i class="fa-brands fa-square-x-twitter fa-beat-fade"></i></a>
			<a href="https://www.youtube.com/channel/UC0gfw4eJpOgO1iXIx4BJwsg" target="_blank"><i class="fa-brands fa-youtube fa-beat-fade"></i></a>
			<a href="#" target="_blank"><i class="fa-brands fa-paypal fa-beat-fade"></i></a>
			<a href="/hexclock.php" target="_blank"><i class="fa-solid fa-clock fa-beat-fade"></i></a>
		</div>
		<!---
		<ul>
			<li><span id="previousSong"></span></li>
			<li><strong><span id="currentSong"></span></strong></li>
			<li><span id="nextSong"></span></li>
		</ul>
		<input id="seekSlider" type="range" min="0" max="100" value="100" step="1">
		<p id="timer">
			<span id="currentTime">00:00</span> / <span id="maxTime">00:00</span>
		</p>
		<input id="volumeSlider" type="range" min="0" max="100" value="100" step="1">
		-->
	</div>
	</div>
</body>
</html>