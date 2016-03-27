$('.slick-slider--2').slick({
  slidesToShow: 6,
  slidesToScroll: 3,
  arrows: true,
  responsive: [
  	{
	  breakpoint: 960,
	  settings: {
	  slidesToShow: 5,
	  slidesToScroll: 3,
	  arrows: true
	  }
	},
	{
	  breakpoint: 885,
	  settings: {
	  slidesToShow: 4,
	  slidesToScroll: 3,
	  arrows: true
	  }
	},
	{ 
	  breakpoint: 768,
	  settings: {
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  arrows: true
	  }
	},
	{ 
	  breakpoint: 600,
	  settings: {
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  arrows: true
	  }
	},
	{ 
	  breakpoint: 480,
	  settings: {
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true  
	  }   	
   	}
  ]
});

