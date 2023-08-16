function validate() {
    var box = document.getElementById('cbox');
    if (box.checked) {
		document.body.style.backgroundColor = "#0f0f0f";

        var panelClass = document.getElementsByClassName('panel');
        var glitchClass = document.getElementsByClassName('glitch');
        var navClass = document.getElementsByClassName('navright');
        var links = document.getElementsByTagName('a');

        for(var i = 0; i < panelClass.length; i++) {
            panelClass[i].style.color = "#f1f1f1";
        }
        for(var i = 0; i < glitchClass.length; i++) {
            glitchClass[i].style.color = "#f1f1f1";
            glitchClass[i].style.borderBottomColor = "#f1f1f1";
        }
        for(var i = 0; i < links.length; i++) {
            links[i].style.color = "#f1f1f1";
        }
        for(var i = 0; i < navClass.length; i++) {
            navClass[i].style.color = "#f1f1f1";
        }
	} else {
		document.body.style.backgroundColor = "white";
        
        var panelClass = document.getElementsByClassName('panel');
        var glitchClass = document.getElementsByClassName('glitch');
        var navClass = document.getElementsByClassName('navright');
        var links = document.getElementsByTagName('a');

        for(var i = 0; i < panelClass.length; i++) {
            panelClass[i].style.color = "#0f0f0f";
        }
        for(var i = 0; i < glitchClass.length; i++) {
            glitchClass[i].style.color = "#0f0f0f";
            glitchClass[i].style.borderBottomColor = "#0f0f0f";
        }
        for(var i = 0; i < links.length; i++) {
            links[i].style.color = "#0f0f0f";
        }
        for(var i = 0; i < navClass.length; i++) {
            navClass[i].style.color = "#0f0f0f";
        }
	}

    var checkbox = document.getElementById('cbox');

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