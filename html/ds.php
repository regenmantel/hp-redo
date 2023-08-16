<?php
$title = "ds - regenmantel";
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title><?php echo $title;?></title>
	<link rel="icon" href="assets/img/icons/crown.jpg">

	<link href="https://fonts.googleapis.com/css?family=Exo+2:300,300italic,200,200italic,400,400italic,500,500italic,600,600italic,700,700italic,900" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet" type="text/css">
	<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
    <style>
        #links {
            font-family: Exo\ 2,'Source Sans Pro';
            font-size: 0.75em;

            top: 0px;
            right: 0px;
            z-index: 100;

            text-align: right;
            position: absolute;
        }
    </style>
    
</head>
<body>
	<span id="links">
		&copy; 2022 regenmantel, All rights reserved.
	</span>
    <input type="text" id="xcord" placeholder="500">
    <input type="text" id="ycord" placeholder="500">
    <p id="test">Fetch a file to change this text.</p>

    <script>
        function getTextt() {
            getText("https://de207.die-staemme.de/map/village.txt");

            async function getText(file) {
            let x = await fetch(file);
            let y = await x.text();
            document.getElementById("test").innerHTML = x[0];
            }
        }
    </script>
</body>
</html>