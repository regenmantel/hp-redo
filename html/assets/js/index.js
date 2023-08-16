/*function PlayAudio() {
	var audio, volumeSlider, seekSlider, seeking=false, seekTo, pauseButton, currentTime, maxTime, previousSong, currentSong, nextSong, dir, playlist, random;

	dir = "../songs/";
	playlist = [
	"lofi-selections-01.mp3",
	"lofi-selections-02.mp3",
	"lofi-selections-03.mp3",
	"young kira - lo-fi selections 01.mp3",
	"young kira - lo-fi selections 02.mp3",
	"young kira - lo-fi selections 03.mp3",
	"young kira - lo-fi selections 04 (co-prod shvde).mp3",
	"young kira - lo-fi selections 05.mp3"];

	seekSlider = document.getElementById("seekSlider");
	volumeSlider = document.getElementById("volumeSlider");

	currentTime = document.getElementById("currentTime");
	maxTime = document.getElementById("maxTime");

	previousSong = document.getElementById("previousSong");
	currentSong = document.getElementById("currentSong");
	nextSong = document.getElementById("nextSong");

	pauseButton = document.getElementById("pauseButton");

	seekSlider.addEventListener("mousedown", function(event) { seeking=true; SeekTime(event); });
	seekSlider.addEventListener("mousemove", function(event) { SeekTime(event); });
	seekSlider.addEventListener("mouseup", function() { seeking=false; });

	volumeSlider.addEventListener("mousemove", SetVolume);

	window.addEventListener("keydown", KeyPressed, false);

	document.getElementById("volumeSlider").value = "10";

	StartSong();

	function StartSong() {
		
		ShufflePlaylist(playlist);
		random = Math.floor(Math.random() * playlist.length);
		playlist_index = random;

		audio = new Audio();
		audio.src = dir + playlist[playlist_index];
		audio.loop = false;
		audio.volume = 0.1;
		audio.play();

		var audio = document.getElementById('music');
		audio.src = "../songs/young kira - lo-fi selections 04 (co-prod shvde).mp3";
		audio.play();


		if(playlist_index < 1) {
			previousSong.innerHTML = "" + playlist[playlist.length - 1]; 
		} else {
			previousSong.innerHTML = "" + playlist[playlist_index - 1]; 
		}
		currentSong.innerHTML = "" + playlist[playlist_index];

		if(playlist_index + 1 > playlist.length - 1) {
			nextSong.innerHTML = "" + playlist[(playlist.length) - playlist.length];
		} else {
			nextSong.innerHTML = "" + playlist[playlist_index + 1];
		}

		audio.addEventListener("timeupdate", function() { SeekTimeUpdate(); });
		audio.addEventListener("ended", function() { SwitchSong(); });

		pauseButton.addEventListener("click", Pause);
	}

	function SwitchSong() {
		if(playlist_index == (playlist.length - 1)) {
			playlist_index = 0;
		} else {
			playlist_index++;
		}

		if(playlist_index < 1) {
			previousSong.innerHTML = "" + playlist[playlist.length - 1]; 
		} else {
			previousSong.innerHTML = "" + playlist[playlist_index - 1]; 
		}
		currentSong.innerHTML = "" + playlist[playlist_index];

		if(playlist_index + 1 > playlist.length - 1) {
			nextSong.innerHTML = "" + playlist[playlist.length - playlist.length];
		} else {
			nextSong.innerHTML = "" + playlist[playlist_index + 1];
		}

		audio.src = dir + playlist[playlist_index];
		audio.play();
	}

	function ShufflePlaylist(playlist) {
		var currentIndex = playlist.length, temporaryValue, randomIndex;

		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			temporaryValue = playlist[currentIndex];
			playlist[currentIndex] = playlist[randomIndex];
			playlist[randomIndex] = temporaryValue;
		}
		return playlist;
	}

	function Pause() {
		if(audio.paused) {
			audio.play();
		} else { 
			audio.pause();
		}
	}

	function SetVolume() {
		audio.volume = volumeSlider.value / 100;
	}

	function SeekTime(event){
		if(seeking){
			seekSlider.value = event.clientX - seekSlider.offsetLeft;
			seekTo = audio.duration * (seekslider.value / 100);
			audio.currentTime = seekTo;
		}
	}

	function SeekTimeUpdate() {
		var duration = audio.currentTime * (100 / audio.duration); 
		seekSlider.value = duration;

		var currentMinutes = Math.floor(audio.currentTime / 60);
		var currentSeconds = Math.floor(audio.currentTime - currentMinutes * 60);

		var maxMinutes = Math.floor(audio.duration / 60);
		var maxSeconds = Math.floor(audio.duration - maxMinutes * 60);
		
		if(currentSeconds < 10)
			currentSeconds = "0" + currentSeconds;

		if(currentMinutes < 10)
			currentMinutes = "0" + currentMinutes;

		if(maxSeconds < 10)
			maxSeconds = "0" + maxSeconds;

		if(maxMinutes < 10)
			maxMinutes = "0" + maxMinutes;

		currentTime.innerHTML = currentMinutes + ":" + currentSeconds;
		maxTime.innerHTML = maxMinutes + ":" + maxSeconds;
	}

	function KeyPressed(e) {
		if(e.keyCode == "32") {
			Pause();
		}
	}
}
window.addEventListener("load", PlayAudio);
*/
function StartTime() {
	var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	
	var today = new Date();
	var hour = today.getHours();
	var minute = today.getMinutes();
	var second = today.getSeconds();

	minute = CheckTime(minute);
	second = CheckTime(second);

	document.getElementById('time').innerHTML = "" + hour + ":" + minute + ":" + second;
	document.getElementById('time').style.color = "#" + hour + "" + minute + "" + second;
	document.getElementById('date').innerHTML = today.toLocaleDateString();
	document.getElementById('day').innerHTML = day[today.getDay()];

	var t = setTimeout(StartTime, 500);
}
function CheckTime(i) { 
	if (i < 10) {i = "0" + i};
	return i;
}
window.addEventListener("load", StartTime);
