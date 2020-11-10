/*global $, document, window*/


window.onload = function () {
	setTimeout(function () {
		document.getElementById('snippet').style.opacity = "0";
		setTimeout(function () {
			document.getElementById('snippet').style.display = "none";
		}, 500);
	}, 1000);
	// $(".snippet").delay(800).fadeOut('slow');
};


//=== NavBar After Scroll
window.addEventListener("scroll", navScroll);

function navScroll () {
	var scrollValue = window.pageYOffset;
	
	if (scrollValue > 100) {
		document.getElementById("navBar").style.backgroundColor = "#fff";
		document.getElementById("navBar").style.transition = "all .5s ease-in";
		document.getElementById("navBar").style.boxShadow = "1px 1px 10px rgba(0,0,0,.25)";
	} else {
		document.getElementById("navBar").style.backgroundColor = "transparent";
		document.getElementById("navBar").style.boxShadow = "none";
    }
};

var swiper = new Swiper('.swiper-container', {
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
	loop: true,
	autoplay: {
		delay: 5000,
	},
	cubeEffect: {
		slideShadows: true,
	  },
});

function menuOpener() {
	document.getElementById("megaMenu").classList.add("open");
}
function menuCloser() {
	document.getElementById("megaMenu").classList.remove("open");
}


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

function tabControl(element){
	var x = document.querySelectorAll('.tabe-details');
	
	for (i=0; i<x.length; i++){
		x[i].style.display = 'none';
		x[i].classList.add('d-none');
		x[i].classList.remove('d-block');
	}
	document.getElementById(element).style.display = 'block';
	document.getElementById(element).classList.add('d-block');
}