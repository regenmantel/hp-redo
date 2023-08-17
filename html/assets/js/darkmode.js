window.onload = function validate() {
    var checkbox = document.getElementById('cbox');
    var panelClass = document.getElementsByClassName('panel');
    var glitchClass = document.getElementsByClassName('glitch');
    var github = document.getElementById('github');
    var xtwitter = document.getElementById('x-twitter');
    var yt = document.getElementById('yt');
    var paypal = document.getElementById('paypal');
    var hexclock = document.getElementById('hexclock');

    if (checkbox.checked) {
		document.body.style.backgroundColor = "#0f0f0f";

        github.style.color = "#f1f1f1";
        xtwitter.style.color = "#f1f1f1";
        yt.style.color = "#f1f1f1";
        paypal.style.color = "#f1f1f1";
        hexclock.style.color = "#f1f1f1";
        
        for(var i = 0; i < glitchClass.length; i++) {
            panelClass[i].style.color = "#f1f1f1";
            glitchClass[i].style.color = "#f1f1f1";
            glitchClass[i].style.borderBottomColor = "#f1f1f1";
        }
	} else {
		document.body.style.backgroundColor = "white";
        
        github.style.color = "#0f0f0f";
        xtwitter.style.color = "#0f0f0f";
        yt.style.color = "#0f0f0f";
        paypal.style.color = "#0f0f0f";
        hexclock.style.color = "#0f0f0f";

        for(var i = 0; i < glitchClass.length; i++) {
            panelClass[i].style.color = "#0f0f0f";
            glitchClass[i].style.color = "#0f0f0f";
            glitchClass[i].style.borderBottomColor = "#0f0f0f";
        }
	}

    checkbox.addEventListener('change', function() {
        if(this.checked) {
            window.localStorage.setItem(checkbox, checkbox.checked);
            validate();
        } else {
            window.localStorage.setItem(checkbox, checkbox);
            validate();
        }
    });
}