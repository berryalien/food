$(function () {

  $('.carousel').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  });

});

import $ from "jquery";
import "slick-carousel";
var mixer = mixitup('.assortment__category');