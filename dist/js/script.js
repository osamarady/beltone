function navScroll(){var e=window.pageYOffset;document.getElementById("navBar").style.boxShadow=100<e?(document.getElementById("navBar").style.backgroundColor="#fff",document.getElementById("navBar").style.transition="all .5s ease-in","1px 1px 10px rgba(0,0,0,.25)"):(document.getElementById("navBar").style.backgroundColor="transparent","none")}window.onload=function(){setTimeout(function(){document.getElementById("snippet").style.opacity="0",setTimeout(function(){document.getElementById("snippet").style.display="none"},500)},1e3)},window.addEventListener("scroll",navScroll);var swiper=new Swiper(".swiper-container",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},loop:!0,autoplay:{delay:5e3},cubeEffect:{slideShadows:!0}});function menuOpener(){document.getElementById("megaMenu").classList.add("open")}function menuCloser(){document.getElementById("megaMenu").classList.remove("open")}var i,coll=document.getElementsByClassName("collapsible");for(i=0;i<coll.length;i++)coll[i].addEventListener("click",function(){this.classList.toggle("active");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"});function tabControl(e){var t=document.querySelectorAll(".tabe-details");for(i=0;i<t.length;i++)t[i].style.display="none",t[i].classList.add("d-none"),t[i].classList.remove("d-block");document.getElementById(e).style.display="block",document.getElementById(e).classList.add("d-block")}