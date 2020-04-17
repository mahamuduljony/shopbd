(function ($) {
	$(document).ready(function(){
        //Responsive-Menu
        jQuery('#m-menu').meanmenu({
            meanMenuContainer: '.m-mobile',
            meanScreenWidth: "539"
        });


		jQuery('.slide-carousel').owlCarousel({
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            autoplay: true,
            autoplayTimeout:4000,
            autoplaySpeed:400,
            dotsSpeed: 800,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
					loop: true
                },
                600: {
                    items: 1,
                    nav: false,
					loop: true
                },
                1000: {
                    items: 1,
                    nav: true,
                    loop: true,
                    dots: false
                }
            }
        });
        
		
		jQuery('.slide-carousel').on('translate.owl.carousel', function () {
            $('.this-item h2').removeClass('fadeInUp animated').hide();
            $('.this-item h3').removeClass('fadeInUp animated').hide();
            $('.this-item p').removeClass('fadeInUp animated').hide();
        });

        jQuery('.slide-carousel').on('translated.owl.carousel', function () {
            $('.this-item h2').addClass('fadeInUp animated').show();
            $('.this-item h3').addClass('fadeInUp animated').show();
            $('.this-item p').addClass('fadeInUp animated').show();
        });
        ////categories-pr-slider
        $('.owl-carousel').owlCarousel({
        	nav: true,
            navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		    autoplay: true,
            autoplayTimeout:3000,
            autoplaySpeed:400,
		    loop:true,
		    margin:10,
		    dots:false,
		    responsive:{
		        0:{
		            items:1,
                    nav:false
		        },
		        540:{
		            items:3
		        },
		        1000:{
		            items:4
		        }
		    }
		})
		////ft-pr-slider
		$('.ft-pr-carousel').owlCarousel({
        	nav: true,
            navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		    autoplay: true,
            autoplayTimeout:3000,
            autoplaySpeed:400,
		    loop:true,
		    margin:10,
		    dots:false,
		    responsive:{
		        0:{
		            items:2
		        },
		        600:{
		            items:2
		        },
		        1000:{
		            items:2
		        }
		    }
		})

        //testimonial-slider 
        $('.testimonial-carousel').owlCarousel({
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            navSpeed:400,
            autoplay: true,
            autoplayTimeout:6000,
            autoplaySpeed:600,
            loop:true,
            margin:10,
            dots:false,
            mouseDrag:false,
            responsive:{
                0:{
                    items:1,
                    nav:false,
                    mouseDrag:true
                },
                600:{
                    items:1,
                    mouseDrag:true
                },
                1000:{
                    items:1,
                    mouseDrag:true
                }
            }
        })
        
        document.addEventListener("contextmen",function(jony){
            jony.preventDefault();
        });

        // Scroll to Top + stickymenu
        $(window).on("scroll", function() {
            if ($(this).scrollTop() > 300){  
                $('#menu-area').addClass("sticky");
                document.getElementById("menu-area").style.top = "0";
                $('.scrollup').slideDown();
            }
            else{
                $('#menu-area').removeClass("sticky");
                document.getElementById("menu-area").style.top = "-50px";
                $('.scrollup').slideUp();
            }
        });

        // Click event to scroll to top
        $('.scrollup').on("click", function() {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });


        

        // Animation in animate.css
		new WOW().init();

		$('#status').fadeOut(); // will first fade out the loading animation
            $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
            $('body').delay(350).css({
            'overflow': 'visible'
        });

	});
})(jQuery);