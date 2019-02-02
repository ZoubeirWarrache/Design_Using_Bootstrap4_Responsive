$(function () {
    "use strict";

    // Adjust slider
    var windowHeight = $(window).height(),
        upperBarH    = $('.upper-bar').innerHeight(),
        navbarH      = $('.navbar').innerHeight();
        
    $('.slider, .carousel-item').height(windowHeight - (upperBarH + navbarH));

    // Shuffle images
    $('.featured-work ul li').on('click', function () {

        $(this).addClass('active').siblings().removeClass('active');

        if ($(this).data('class') == 'all') {

            $('.shuffle-imgs .col-md').css('opacity', 1);

        } else {

            $('.shuffle-imgs .col-md').css('opacity', '.09');

            $($(this).data('class')).parent().css('opacity', 1);
        }
    });
    
});