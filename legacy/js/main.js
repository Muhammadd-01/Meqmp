(function($) {

	'use strict';

	// bootstrap dropdown hover

  // loader
  var loader = function() {
    setTimeout(function() { 
      if($('#loader').length > 0) {
        $('#loader').removeClass('show');
      }
    }, 1);
  };
  loader();

	
	$('nav .dropdown').hover(function(){
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			$this.find('.dropdown-menu').removeClass('show');
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// home slider
	$('.home-slider').owlCarousel({
    loop:true,
    autoplay: true,
    margin:10,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav:true,
    autoplayHoverPause: true,
    items: 1,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:1,
        nav:false
      },
      1000:{
        items:1,
        nav:true
      }
    }
	});

	// owl carousel
	var majorCarousel = $('.js-carousel-1');
	majorCarousel.owlCarousel({
    loop:true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    items: 3,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:2,
        nav:false
      },
      1000:{
        items:3,
        nav:true,
        loop:false
      }
  	}
	});

	// owl carousel
	var major2Carousel = $('.js-carousel-2');
	major2Carousel.owlCarousel({
    loop:true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    items: 4,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:3,
        nav:false
      },
      1000:{
        items:4,
        nav:true,
        loop:false
      }
  	}
	});


	var contentWayPoint = function() {
		var i = 0;
		$('.element-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('element-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .element-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn element-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft element-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight element-animated');
							} else {
								el.addClass('fadeInUp element-animated');
							}
							el.removeClass('item-animate');
						},  k * 100);
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();




	// Video Play / Pause Toggle
	var video = document.getElementById('corporateVideo');
	var playBtn = document.getElementById('playBtn');
	var overlay = document.getElementById('videoOverlay');

	if (video && playBtn && overlay) {
		playBtn.addEventListener('click', function() {
			overlay.classList.add('hide');
			video.play();
		});

		video.addEventListener('pause', function() {
			if (video.currentTime < video.duration) {
				overlay.classList.remove('hide');
			}
		});

		video.addEventListener('ended', function() {
			overlay.classList.remove('hide');
		});
	}

	// Number Counter Animation
	var animatedCounters = false;
	function runCounters() {
		if (animatedCounters) return;
		var section = $('.successful-business-section');
		if (section.length === 0) return;

		var oTop = section.offset().top - window.innerHeight + 100;
		if ($(window).scrollTop() > oTop) {
			animatedCounters = true;
			$('.count-up').each(function () {
				var $this = $(this);
				var countTo = parseFloat($this.attr('data-count'));
				var isDecimal = countTo % 1 !== 0;
				var suffix = $this.text().indexOf('+') !== -1 ? '+' : ($this.text().indexOf('%') !== -1 ? '%' : '');
				
				$({ countNum: 0 }).animate({
					countNum: countTo
				}, {
					duration: 2000,
					easing: 'swing',
					step: function () {
						if (isDecimal) {
							$this.text(this.countNum.toFixed(1) + suffix);
						} else {
							$this.text(Math.floor(this.countNum).toLocaleString() + suffix);
						}
					},
					complete: function () {
						if (isDecimal) {
							$this.text(countTo.toFixed(1) + suffix);
						} else {
							$this.text(countTo.toLocaleString() + suffix);
						}
					}
				});
			});
		}
	}

	$(window).on('scroll', runCounters);
	runCounters();

})(jQuery);