$('.slick-slider--3').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
  	{
	  breakpoint: 960,
	  settings: {
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  arrows: true
	  }
	},
	{
	  breakpoint: 885,
	  settings: {
	  slidesToShow: 2,
	  slidesToScroll: 2,
	  arrows: true
	  }
	},
	{ 
	  breakpoint: 768,
	  settings: {
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true
	  }
	},
	{ 
	  breakpoint: 600,
	  settings: {
	  slidesToShow: 1,
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

