function StartTime() {
	var date = new Date();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();

	minute = CheckTime(minute);
	second = CheckTime(second);

	document.getElementById('time').innerHTML = "#" + hour + "" + minute + "" + second;
	document.bgColor = "#" + hour + "" + minute + "" + second;

	var time = setTimeout(StartTime, 500);
}
function CheckTime(i) {
	if (i < 10) {i = "0" + i};
	return i;
}
window.addEventListener("load", StartTime);