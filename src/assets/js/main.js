jQuery.noConflict();

(function($) {
	$(document).ready(function(){
	
		var visualSwiper = new Swiper('.visual .swiper-container', {
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
	
		var bestMenuSwiper = new Swiper('.best-menu .best-menu__item .swiper-container', {
			speed: 600,
			loop: true,
			autoplay: {
				enabled: false,
				delay: 2000
			},
			breakpointsInverse: true,
			breakpoints: {
				750: {
					allowTouchMove: false
				}
			}
		});
	
		$(document).on('mouseenter mouseleave', '.desktop .best-menu .best-menu__item:not(.best-menu__item--figure)', function(event){
			if (event.type === 'mouseenter') {
				$(this).find('.swiper-container')[0].swiper.autoplay.start();
			}
			if (event.type === 'mouseleave') {
				$(this).find('.swiper-container')[0].swiper.autoplay.stop();
			}
		});
	
		var celebCurationSwiper = new Swiper('.celeb-curation .celeb-curation__swiper .swiper-container', {
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