$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop()) {
      $("header").addClass("header-scroll");
    } else {
      $("header").removeClass("header-scroll");
    }
  });
});