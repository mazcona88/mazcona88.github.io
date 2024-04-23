(function($) { 


/* ================ Navigation ================ */	
	$('[data-toggle="offcanvas"]').on('click', function () {
    $('.navbar-collapse').toggleClass('show');
    });


    
/* ================ Revolution Slider. ================ */
    if($('.tp-banner').length > 0){
        $('.tp-banner').show().revolution({
            delay:6000,
            startheight: 550,
            startwidth: 1170,
            hideThumbs: 1000,
            navigationType: 'none',
            touchenabled: 'on',
            onHoverStop: 'on',
            navOffsetHorizontal: 0,
            navOffsetVertical: 0,
            dottedOverlay: 'none',
            fullWidth: 'on'
        });
    }
    if($('.tp-banner-full').length > 0){
        $('.tp-banner-full').show().revolution({
            delay:6000,
            hideThumbs: 1000,
            navigationType: 'none',
            touchenabled: 'on',
            onHoverStop: 'on',
            navOffsetHorizontal: 0,
            navOffsetVertical: 0,
            dottedOverlay: 'none',
            fullScreen: 'on'
        });
    }   



/* ================ Logos ================ */
    $(document).ready(function() {
        $(".logos_list").owlCarousel({
            loop: true,
            rewind: true,
            margin: 15,
            nav: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                    nav: true
                },
                700: {
                    items: 3,
                    nav: false
                },
                900: {
                    items: 4,
                    nav: false
                },
                1170: {
                    items: 5,
                    nav: true
                }
            }
        });
    });



/* ================ lawyerList ================ */
    $(document).ready(function() {
        $(".lawyerList").owlCarousel({
            loop: true,
            rewind: true,
            margin: 15,
            nav: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                700: {
                    items: 2,
                    nav: false
                },
                900: {
                    items: 3,
                    nav: false
                },
                1170: {
                    items: 3,
                    nav: true
                }
            }
        });
    });

/* ================ testimonials ================ */
    $(document).ready(function() {
        $(".testimonials_list").owlCarousel({
            loop: true,
            rewind: true,
            margin: 15,
            nav: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                700: {
                    items: 1,
                    nav: false
                },
                900: {
                    items: 1,
                    nav: false
                },
                1170: {
                    items: 1,
                    nav: true
                }
            }
        });
    });





/*==== Nav ====*/
    $('.navbar-collapse a').on('click',function(){
        $(".navbar-collapse").collapse('hide');
    });



/* ================ sticky fix ================ */
    
    $(window).scroll(function() {
	if ($(this).scrollTop() > 163){  
		$('.navigation-wrap').addClass("sticky");
	  }
	  else{
		$('.navigation-wrap').removeClass("sticky");
	  }
	});



/* ================ Counter ================ */
	$('.counter-item').appear(function() {
		$('.counter-number').countTo();
	});


 /*==== Smoothscroll ====*/    
    $('#home a, .custom-navbar a').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 120
        }, 1000);
          event.preventDefault();
    });


})(jQuery);