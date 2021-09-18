$(function () {
    var navbar = $(".navbar");

    $(window).scroll(function () {
      if ($(window).scrollTop() <= 40) {
        navbar.removeClass("navbar-scroll");
        console.log(document.getElementsByClassName("navbar")[0]);
        document
          .getElementsByClassName("navbar")[0]
          .setAttribute("id", "laravel");
      } else {
        $("nav#laravel").removeAttr("id");
        navbar.addClass("navbar-scroll");
      }
    });
  });