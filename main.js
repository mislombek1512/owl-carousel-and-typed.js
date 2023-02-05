$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true
    });
  });

//   typed.js

var typed = new Typed('.element', {
    strings: ["VLOG.UZ-INNOVATSION VIDEO KURSLAR", "7 kundan 2 oygacha vaqt davomida", "TEZ va OSON o'rganing"],
    typeSpeed: 30,
    backSpeed:30,
    loop: true
  });
  