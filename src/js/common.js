$(document).ready(function() {

	$('.superslider__slides').slick({
	  infinite: true,
	  centerMode: true,
	  slidesToScroll: 1,
	  variableWidth: true,
	  prevArrow: $('.superslider__prev'),
      nextArrow: $('.superslider__next'),
	});
	$('.superslider').on('click', '.superslider__slide', function (e) {
	  e.stopPropagation();
	  var index = $(this).data("slick-index");
	  if ($('.superslider__slides').slick('slickCurrentSlide') !== index) {
	    $('.superslider__slides').slick('slickGoTo', index);
	  }
	});


});