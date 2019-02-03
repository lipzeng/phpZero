window.onload = function(){
	var slidewidth = document.getElementById("slideshow").offsetWidth;
	var objs = document.getElementsByClassName("slide");
	for(var i=0;i<objs.length;i++) {
        objs[i].style.width = slidewidth + "px";
    }
}