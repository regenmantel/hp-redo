function GetRandomImage() {
	var championArr = [
		"Aatrox", 
		"Ahri",
		"Akali",
        "Akshan",
		"Alistar",
		"Amumu",
		"Anivia",
		"Annie",
        "Aphelios",
		"Ashe",
		"AurelionSol",
		"Azir",
		"Bard",
        "Belveth",
		"Blitzcrank",
		"Brand",
		"Braum",
		"Caitlyn",
		"Camille",
		"Cassiopeia",
		"Chogath",
		"Corki",
		"Darius",
		"Diana",
        "DrMundo",
		"Draven",
		"Ekko",
		"Elise",
		"Evelynn",
		"Ezreal",
		"FiddleSticks",
		"Fiora",
		"Fizz",
		"Galio",
		"Gangplank",
		"Garen",
		"Gnar",
		"Gragas",
		"Graves",
        "Gwen",
		"Hecarim",
		"Heimerdinger",
		"Illaoi",
		"Irelia",
		"Ivern",
		"Janna",
		"JarvanIV",
		"Jax",
		"Jayce",
		"Jhin",
		"Jinx",
		"Kaisa",
		"Kalista",
		"Karma",
		"Karthus",
		"Kassadin",
		"Katarina",
		"Kayle",
		"Kayn",
		"Kennen",
		"Khazix",
		"Kindred",
		"Kled",
		"KogMaw",
		"Leblanc",
		"LeeSin",
		"Leona",
        "Lillia",
		"Lissandra",
		"Lucian",
		"Lulu",
		"Lux",
		"Malphite",
		"Malzahar",
		"Maokai",
		"MasterYi",
		"MissFortune",
		"Mordekaiser",
		"Morgana",
		"MonkeyKing",
		"Nami",
		"Nasus",
		"Nautilus",
		"Neeko",
		"Nidalee",
        "Nilah",
		"Nocturne",
		"Nunu",
		"Olaf",
		"Orianna",
		"Ornn",
		"Pantheon",
		"Poppy",
		"Pyke",
		"Qiyana",
		"Quinn",
		"Rakan",
		"Rammus",
		"RekSai",
        "Rell",
        "Renata",
		"Renekton",
		"Rengar",
		"Riven",
		"Rumble",
		"Ryze",
        "Samira",
		"Sejuani",
        "Senna",
        "Seraphine",
        "Sett",
		"Shaco",
		"Shen",
		"Shyvana",
		"Singed",
		"Sion",
		"Sivir",
		"Skarner",
		"Sona",
		"Soraka",
		"Swain",
		"Sylas",
		"Syndra",
		"TahmKench",
		"Taliyah",
		"Talon",
		"Taric",
		"Teemo",
		"Thresh",
		"Tristana",
		"Trundle",
		"Tryndamere",
		"TwistedFate",
		"Twitch",
		"Udyr",
		"Urgot",
		"Varus",
		"Vayne",
		"Veigar",
		"Velkoz",
        "Vex",
		"Vi",
        "Viego",
		"Viktor",
		"Vladimir",
		"Volibear",
		"Warwick",
		"Xayah",
		"Xerath",
		"XinZhao",
		"Yasuo",
        "Yone",
		"Yorick",
		"Yuumi",
		"Zac",
		"Zed",
        "Zeri",
		"Ziggs",
		"Zilean",
		"Zoe",
	"Zyra"]

	var rng = Math.floor(Math.random() * championArr.length);
	
	document.getElementById("randomChampion").src = "assets/img/loading/" + championArr[rng] + "_0.jpg";

	switch(championArr[rng]) {
		case "AurelionSol": championArr[rng] = "Aurelion Sol"; break;
        case "Belveth": championArr[rng] = "Bel'Veth"; break;
		case "Chogath": championArr[rng] = "Cho'Gath"; break;
		case "DrMundo": championArr[rng] = "Dr Mundo"; break;
		case "FiddleSticks": championArr[rng] = "Fiddlesticks"; break;
		case "JarvanIV": championArr[rng] = "Jarvan IV."; break;
		case "Kaisa": championArr[rng] = "Kai'Sa"; break;
		case "Khazix": championArr[rng] = "Kha'Zix"; break;
		case "KogMaw": championArr[rng] = "Kog'Maw"; break;
		case "Leblanc": championArr[rng] = "Le Blanc"; break;
		case "LeeSin": championArr[rng] = "Lee Sin"; break;
		case "MasterYi": championArr[rng] = "Master Yi"; break;
		case "MissFortune": championArr[rng] = "Miss Fortune"; break;
		case "MonkeyKing": championArr[rng] = "Wukong"; break;
		case "Nunu": championArr[rng] = "Nunu & Willump"; break;
        case "Renata": championArr[rng] = "Renata Clasc"; break;
		case "RekSai": championArr[rng] = "Rek'Sai"; break;
		case "TahmKench": championArr[rng] = "Tahm Kench"; break;
		case "TwistedFate": championArr[rng] = "Twisted Fate"; break;
		case "Velkoz": championArr[rng] = "Vel'Koz"; break;
		case "XinZhao": championArr[rng] = "Xin Zhao"; break;
	}

	document.getElementById("randomChampionString").innerHTML = championArr[rng].replace(/\.[^/.]+$/, "");
}