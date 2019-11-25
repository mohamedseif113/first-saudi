jQuery(function ($) {
    "use strict";


    //Update Header Style and Scroll to Top
    function headerStyle() {
        if ($('.main-header').length) {
            var windowpos = $(window).scrollTop();
            var siteHeader = $('.main-header');
            var sticky_header = $('.main-header .sticky-header');
            var scrollLink = $('.scroll-to-top');
            if (windowpos > 100) {
                siteHeader.addClass('fixed-header');
                sticky_header.addClass("animated slideInDown");
                scrollLink.fadeIn(300);
            } else {
                siteHeader.removeClass('fixed-header');
                sticky_header.removeClass("animated slideInDown");
                scrollLink.fadeOut(300);
            }
        }
    }

    headerStyle();


    //Submenu Dropdown Toggle
    if ($('.main-header li.dropdown ul').length) {
        $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

        //Dropdown Button
        $('.main-header .navigation li.dropdown .dropdown-btn').on('click', function () {
            $(this).prev('ul').slideToggle(500);
        });

        //Disable dropdown parent link
        $('.main-header .navigation li.dropdown > a').on('click', function (e) {
            e.preventDefault();
        });
    }




    //Mobile Nav Hide Show
    if ($('.mobile-menu').length) {

        var mobileMenuContent = $('.main-header .nav-outer .main-menu .navigation').html();
        $('.mobile-menu .navigation').append(mobileMenuContent);
        $('.sticky-header .navigation').append(mobileMenuContent);
        $('.mobile-menu .close-btn').on('click', function () {
            $('body').removeClass('mobile-menu-visible');
        });
        //Dropdown Button
        $('.mobile-menu li.dropdown .dropdown-btn').on('click', function () {
            $(this).prev('ul').slideToggle(500);
        });
        //Menu Toggle Btn
        $('.mobile-nav-toggler').on('click', function () {
            $('body').addClass('mobile-menu-visible');
        });

        //Menu Toggle Btn
        $('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function () {
            $('body').removeClass('mobile-menu-visible');
        });

    }
    $(window).on('scroll', function () {
        headerStyle();
    });
    /* ---------------------------------------------------------------------- */

    if ($.fn.niceSelect) {
        $('select').niceSelect();
    };

	/*------------------------------------------
			SLIDER BACKGROUND MOVE
	------------------------------------------*/
	function sliderbgMove(){
		var moveForce = 25;
		var rotateForce = 15;
		$(document).mousemove(function(e) {
			var docX = $(document).width();
			var docY = $(document).height();
			var moveX = (e.pageX - docX/2) / (docX/2) * -moveForce;
			var moveY = (e.pageY - docY/2) / (docY/2) * -moveForce;
			var rotateY = (e.pageX / docX * rotateForce*2) - rotateForce;
			var rotateX = -((e.pageY / docY * rotateForce*2) - rotateForce);
			$('.tg-imglayer')
			.css('right', moveX+'px')
			.css('top', moveY+'px')
			.css('transform', 'rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)');
		});
	}
	sliderbgMove();
	/*------------------------------------------
			HOME SLIDER
	------------------------------------------*/
	var swiper = new Swiper('#home-slider', {
		nextButton: '.tg-btn-next',
		prevButton: '.tg-btn-prev',
		loop: true,
	});



  

    //Banner Carousel
    if ($('.banner-carousel').length) {
        var swiper = new Swiper('.banner-carousel', {
            spaceBetween: 0,
            speed: 1500,
            centeredSlides: true,
            //animateOut: 'slideInDown',
            //animateIn: 'slideIn',
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
    
  


    ////////////////////////////


    $(window).scroll(function () {
        if ($(this).scrollTop() >= 800) {
            $('#toTop').fadeIn(500)
        } else {
            $('#toTop').fadeOut(500)
        }
    });

    $('#toTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });

    /////////////////////////////////up
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 800) {
            $('.up').fadeIn(500)
        } else {
            $('.up').fadeOut(500)
        }
    });

    $('.up').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });




    //////////////////////////////////

//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}

    //=== Testimonial Carousel===

        $('.clients-list').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 2,
            autoplay: true,
            speed: 1200,
            responsive: [{
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    arrows: false
                }
            }, {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            }]
        });
        /* ********************************************
         Price Slider
    ******************************************** */
    $("#slider-range").slider({
        range: true,
        min: 50,
        max: 2000,
        values: [50, 999],
        slide: function (event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));

   /* ********************************************
      Treeview active
    ******************************************** */


    $("#cat-treeview ul").treeview({
        animated: "normal",
        persist: "location",
        collapsed: true,
        unique: true,
    });

    $("#cat-treeview-2 ul").treeview({
        animated: "normal",
        persist: "location",
        collapsed: true,
        unique: true,
    });





});

    //   =============newNavcode

$('.owl-partners').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    rtl: true,
        autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})

