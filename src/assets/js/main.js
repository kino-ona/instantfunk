jQuery.noConflict();

(function($) {
	$(document).ready(function(){
	
		var visualSwiper = new Swiper('.visual .swiper', {
			speed: 600,
			loop: true,
			pagination: {
				el: '.visual .visual__pagination',
				type: 'fraction'
			},
			breakpointsInverse: true,
			breakpoints: {
				750: {
					allowTouchMove: false
				}
			}
		});
	
		if (visualSwiper.initialized) {
			var video = visualSwiper.$el.find('video');
			var target = $('.desktop .visual .visual__control').find('.visual__video');
	
			visualSwiper.slides.eq(visualSwiper.activeIndex).find('.visual__theme').addClass('visual__theme--fadein');
			visualSwiper.slides.eq(visualSwiper.activeIndex).find('.visual__title').addClass('visual__title--fadein');
			visualSwiper.slides.eq(visualSwiper.activeIndex).find('.visual__link').addClass('visual__link--fadein');
			visualSwiper.pagination.$el.addClass('visual__pagination--fadein');
			$('.visual__control').addClass('visual__control--fadein');
	
			video[visualSwiper.activeIndex].play();
	
			target.removeClass('visual__video--visible');
	
			visualSwiper.pagination.destroy();
		}
	
		visualSwiper.on('slideChangeTransitionStart', function(){
			var video = visualSwiper.$el.find('video');
			var target = $('.desktop .visual .visual__control').find('.visual__video');
	
			for (var i = 0; i < video.length; i++) {
				video[i].pause();
			}
	
			target.removeClass('visual__video--visible');
	
			if (Number(visualSwiper.realIndex) + 1 == visualSwiper.slides.length - 2) {
				target.first().addClass('visual__video--visible');
			} else {
				target.eq(Number(visualSwiper.realIndex) + 1).addClass('visual__video--visible');
			}
		});
	
		visualSwiper.on('slideChangeTransitionEnd', function(){
			var video = visualSwiper.$el.find('video');
	
			video[visualSwiper.activeIndex].play();
		});
	
		$(document).on('mouseenter mouseleave', '.desktop .visual .visual__control', function(event){
			if (event.type === 'mouseenter') {
				var target = $(this).find('.visual__video');
				
				target.removeClass('visual__video--visible');
	
				if (Number(visualSwiper.realIndex) + 1 == visualSwiper.slides.length - 2) {
					target.first().addClass('visual__video--visible');
				} else {
					target.eq(Number(visualSwiper.realIndex) + 1).addClass('visual__video--visible');
				}
			}
			if (event.type === 'mouseleave') {
				var target = $(this).find('.visual__video');
	
				target.removeClass('visual__video--visible');
			}
		});
	
		$('.visual .visual__control').on('click', function(){
			visualSwiper.slideNext();
		});

		var bestMenuSwiper = new Swiper('.best-menu .best-menu__item .swiper', {
			speed: 300,
			effect: 'creative',
			creativeEffect: {
				next: {
					translate: ['100%', 0, 1],
				},
				prev: {
					translate: [0, 0, -1],
				}
			},
			touchEventsTarget: 'container',
			autoplay: {
				enabled: false,
				delay: 500
			},
			breakpointsInverse: true,
			breakpoints: {
				750: {
					allowTouchMove: false
				}
			},
			on: {
				init: function(swiper) {
					console.log(swiper);
				},
				breakpoint: function(swiper, breakpointParams) {
					if (!breakpointParams.allowTouchMove) {
						swiper.on('reachEnd', function(swiper){
							swiper.on('slidePrevTransitionStart', function(swiper){
								var offset = '-' + swiper.slides[swiper.slides.length - 1].swiperSlideOffset - swiper.width + 'px';
								swiper.autoplay.stop();
									for (var i = 1; i < swiper.slides.length - 1; i++) {
									swiper.slides[i].style.transform = 'translate3d('+offset+', calc(0px), calc(1px)) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)';
								}
								swiper.slides[swiper.slides.length - 1].style.transform = 'translate3d('+offset+', calc(0px), calc(1px)) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)';
							});
							swiper.on('slidePrevTransitionEnd', function(){
								swiper.update();
							});
						});
					}
				},
			}
		});

		$(document).on('mouseenter mouseleave', '.desktop .best-menu .best-menu__item:not(.best-menu__item--figure)', function(event){
			swiper = $(this).find('.swiper')[0].swiper;
			if (event.type === 'mouseenter') {
				swiper.update();
				swiper.autoplay.start();
			}
			if (event.type === 'mouseleave') {
				if(swiper.activeIndex <= swiper.slides.length - 1) {
					swiper.slideTo(0);
				}
				swiper.autoplay.stop();
				swiper.update();
			}
		});
	
		var celebCurationSwiper = new Swiper('.celeb-curation .celeb-curation__swiper .swiper', {
			speed: 600,
			loop: true,
			navigation: {
				nextEl: '.celeb-curation .celeb-curation__swiper .swiper-button-next',
				prevEl: '.celeb-curation .celeb-curation__swiper .swiper-button-prev'
			}
		});
	
		function cubeTopRotate() {
			var cubeTop = $('.cube').eq(0);
			var cubeTopOffset = cubeTop.offset().top;
			var winHeight = $(window).height();
			var scrollTop = $(window).scrollTop();
	
			if (scrollTop > cubeTopOffset - winHeight) {
				cubeTop.addClass('cube--rotated');
			}
		}
		cubeTopRotate();
	
		function cubeBottomRotate() {
			var cubeBottom = $('.cube').eq(1);
			var cubeBottomOffset = cubeBottom.offset().top;
			var winHeight = $(window).height();
			var scrollTop = $(window).scrollTop();
	
			if (scrollTop > cubeBottomOffset - winHeight) {
				cubeBottom.addClass('cube--rotated');
			}
		}	
		cubeBottomRotate();
	
		function celebScreen() {
			var screenTarget = $('.celeb-curation__screen');
			var screenTargetOffset = screenTarget.offset().top;
			var screenTargetHeight = screenTarget.height();
			var scrollTop = $(window).scrollTop();
			
			if (scrollTop >= screenTargetOffset - screenTargetHeight / 3) {
				screenTarget.addClass('celeb-curation__screen--opened');
			}
		}
		celebScreen();
	
		$(window).scroll(function(){
			cubeTopRotate();
			cubeBottomRotate();
			celebScreen();
		});
	});
})(jQuery);