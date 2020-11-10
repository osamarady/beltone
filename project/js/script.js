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
		document.getElementById("navBar").style.transition = "all .3s ease-in";
		document.getElementById("navBar").style.boxShadow = "1px 1px 10px rgba(0,0,0,.25)";
	} else {
		document.getElementById("navBar").style.backgroundColor = "transparent";
		document.getElementById("navBar").style.boxShadow = "none";
    }
};

var swiper = new Swiper('.carousel .swiper-container', {
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
var swiperAbout = new Swiper('.about-section .swiper-container', {
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

function slidePointer(index) {
	swiperAbout.slideTo(index);
	swiperAbout.update();
}

function menuOpener() {
	document.getElementById("megaMenu").classList.add("open");
}
function menuCloser() {
	document.getElementById("megaMenu").classList.remove("open");
}

function menuHover(id) {
	var element = document.getElementsByClassName('menu-hvr');
	
	for (var i = 0; i < element.length; i++) {
		element[i].classList.remove('d-block');
	}
	document.getElementById(id).classList.add('d-block');
}

function rundomArticle() {
	var random = Math.floor(Math.random()*3),
		element = document.getElementsByClassName('menu-article');
	console.log(random);

	for (var i = 0; i < element.length; i++) {
		element[i].classList.remove('d-block');
	}
	element[random].classList.add('d-block');
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

function tabControl(element, index){
	slidePointer(index);
	var x = document.querySelectorAll('.tabe-details'),
		taps = document.querySelectorAll('.taps');
	
	for (i=0; i<taps.length; i++){
		taps[i].classList.remove('active');
	}
	for (i=0; i<x.length; i++){
		x[i].style.display = 'none';
		x[i].classList.add('d-none');
		x[i].classList.remove('d-block');
	}
	document.getElementById(element).style.display = 'block';
	document.getElementById(element).classList.add('d-block');
	document.getElementById(element+"_tap").classList.add('active');
}


var x = document.getElementsByClassName('carousel-img');

for (var i = 0; i < x.length; i++) {
	x[i].style.height = (document.getElementById('sliderUpper').clientHeight +200)  + 'px';
}