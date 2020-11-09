/*global $, document, window*/

/* Navbar Settings */
// $(document).ready(function () {
//     "use strict";
//     var scrollLink = $('.scroll');

//     // Smooth scrolling
//     scrollLink.click(function (e) {
//         e.preventDefault();
//         $('body, html').animate({
//             scrollTop: $(this.hash).offset().top - 10
//         }, 1000);
//     });

//     // Active link switching
//     $(window).scroll(function () {
//         var scrollbarLocation = $(this).scrollTop();

//         scrollLink.each(function () {

//             var sectionOffset = $(this.hash).offset().top - 10;

//             if (sectionOffset <= scrollbarLocation) {
//                 $(this).parent().addClass('active');
//                 $(this).parent().siblings().removeClass('active');
//             }
//         });

//     });

// });

//=== NavBar After Scroll
// $(document).on("scroll", function () {
//     "use strict";
//     var x = $(document).scrollTop();
//     if (x > 200) {
//         $(".nav-bg").css({
//             "background-color": "#fff",
//             "transition": "all .5s ease-in"
//         }).addClass("shadow");
//     } else {
//         $(".nav-bg").css("background-color", "transparent").removeClass("shadow");

//     }
// });

var swiper = new Swiper('.swiper-container', {
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  });