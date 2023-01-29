(function ($) {
    "use strict";
   
    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
    
})(jQuery);


var y = document.getElementById('year');
year = new Date().getFullYear();
console.log(year);
y.innerHTML = year;