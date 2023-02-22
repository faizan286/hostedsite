$(document).ready(function(){
    $(".toggle-btn").click(function(){
        // $(this).closest(".toggler").siblings(".main-menu").toggleClass("active-menu");
        $(".main-menu").toggleClass("active-menu");
    });
    $(".close-btn").click(function(){
        $(".main-menu").removeClass("active-menu");
    });

    $(window).on("scroll", function () {


    if ($(".header-sticky").length) {
      var headerScrollPos = 130;
      var stricky = $(".header-sticky");
      if ($(window).scrollTop() > headerScrollPos) {
        stricky.addClass("active");
        $('.header-main').addClass('header-sticky');
      } else if ($(this).scrollTop() <= headerScrollPos) {
        stricky.removeClass("active");
        $('.header-main').removeClass('header-sticky');
      }
    }
    if ($(".scroll-to-top").length) {
      var strickyScrollPos = 100;
      if ($(window).scrollTop() > strickyScrollPos) {
        $(".scroll-to-top").fadeIn(500);
      } else if ($(this).scrollTop() <= strickyScrollPos) {
        $(".scroll-to-top").fadeOut(500);
      }
    }


  });

});
