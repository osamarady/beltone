/*global $, document, window*/

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
});