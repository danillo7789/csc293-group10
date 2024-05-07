$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,  // Adjusts the number of slides on smaller screens.
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
