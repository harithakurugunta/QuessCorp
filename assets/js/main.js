$(function() {

    "use strict";


    $(window).on('load', function(event) {
        $('#preloader').delay(500).fadeOut(500);
    });


 

    $(window).on('scroll', function(event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".header_navbar").removeClass("sticky");
        } else {
            $(".header_navbar").addClass("sticky");
        }
    });


    

   

    $(".navbar-nav a").on('click', function() {
        $(".navbar-collapse").removeClass("show");
    });

    $(".navbar-toggler").on('click', function() {
        $(this).toggleClass("active");
    });

    $(".navbar-nav a").on('click', function() {
        $(".navbar-toggler").removeClass('active');
    });


  

    




});