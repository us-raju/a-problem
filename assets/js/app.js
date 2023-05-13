$(function () {
  $(".banner_item").slick({
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    dotsClass: "banner_dots",
  });
});
AOS.init({

});
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);