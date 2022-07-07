$(document).ready(function(){
	
	var visualSwiper = new Swiper('.visual .swiper-container', {
		speed: 600,
		loop: true,
		pagination: {
			el: '.visual .swiper-container .swiper-pagination',
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

		visualSwiper.slides.eq(visualSwiper.activeIndex).find('.visual__contents').addClass('visual__contents--fadein');

		video[visualSwiper.activeIndex].play();

		target.removeClass('visual__video--visible');
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

	var bestMenuSwiper = new Swiper('.best-menu .best-menu__item .swiper-container');

	var celebCurationSwiper = new Swiper('.celeb-curation .celeb-curation__swiper .swiper-container', {
		navigation: {
			nextEl: '.celeb-curation .celeb-curation__swiper .swiper-button-next',
			prevEl: '.celeb-curation .celeb-curation__swiper .swiper-button-prev'
		}
	});

	var screenTarget = $('.celeb-curation__screen');
	var screenTargetOffset = screenTarget.offset().top;
	var screenTargetHeight = screenTarget.height();

	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if (scrollTop >= screenTargetOffset - screenTargetHeight / 3) {
			screenTarget.addClass('celeb-curation__screen--opened');
		}
	});
});