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
        dots: false,
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



//================== type js add==============

 var typed = new Typed('.type', {
  strings: 
     [
         'build webside for your business.',
         'convert your PSD to HTML',
         'make for you responsive landing page',
         'fix HTML CSS Bugs',
     ],
     loop: true,
     typeSpeed: 20,
     backSpeed:20,
     
//  smartBackspace: true // Default value
});

//============menu_popup===============



$(window).scroll(function(){
    var scroling = $(this).scrollTop();
    if(scroling > 200){
        console.log('fired')
        $('.menu_come').addClass('in')
        
    }
    if(scroling<200){
       $('.menu_come').removeClass('out')
        $('.menu_come').removeClass('in')
    }
    if($('.menu_come').hasClass('out')){
        $('.menu_come').removeClass('in')
    }
    if(scroling >200){
        $('.back_top').slideDown();
    }
    else{
            $('.back_top').slideUp();
        }
    
    
});
$('.close').click(function(){
        $('.menu_come').removeClass('in')
        $('.menu_come').addClass('out')
        
         
    });

//===========smooth_scroll===============
var scroll = new SmoothScroll('a[href*="#"]');

//=============banner_polygonal js==============

$('#banner_part').polygonizr();
$('#pricing_part').polygonizr();

//=============banner_round js=============
$('.drim').createWaterBall({
  targetRange:100
});

//============light_box js===============
 lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })










