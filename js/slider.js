$('.slick-slider').slick({
  dots: true,
  infinite: true,
  slidesToShow: 3.5,
  slidesToScroll: 1,
  autoplay: true,
  playSpeed: 1000,
  responsive: [
    {
	  breakpoint: 960,
	  settings: {
	  dots: true,
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay: true,
	  playSpeed: 1000
	  }
	},
	{ 
	  breakpoint: 768,
	  settings: {
	  dots: true,
	  infinite: true,
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  autoplay: true,
	  playSpeed: 1000
	  }
	},
	{ 
	  breakpoint: 600,
	  settings: {
	  dots: true,
	  infinite: true,
	  slidesToShow: 1.5,
	  slidesToScroll: 1,
	  autoplay: true,
	  playSpeed: 1000
	  }
	},
	{ 
	  breakpoint: 480,
	  settings: {
	  dots: true,
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  playSpeed: 1000
	  }   	
   	}
  ]
});

