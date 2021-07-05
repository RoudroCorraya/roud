//skill_part progress bar
	$(document).ready(function(){

	$('#bar1').barfiller();
	$('#bar2').barfiller();
	$('#bar3').barfiller({ barColor: '#fc6' });
	$('#bar4').barfiller({ barColor: '#900',duration: 3000 });
    $('#bar5').barfiller({ barColor: '#900',duration: 3000 });
	
});

//mixt_up add
var mixer = mixitup('.item_port');


//testi_part slick slider
$('.testi_jala').slick({
  dots: false,
  infinite: false,
    arrows:false,
    autoPlay:true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
    infinite: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
      
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
