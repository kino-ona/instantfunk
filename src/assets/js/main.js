$(document).ready(function(){
	// setTimeout(function(){
		
	// }, 800);
	const visualSwiper = $('.visual .swiper-container').swiper({
		speed: 600,
		loop: true,
		pagination: '.swiper-pagination',
		paginationType: 'fraction',
		onInit: function(swiper) {
			const video = swiper.slides.find('video').get();
			const target = $('.desktop .visual .visual__control').find('.visual__video');

			swiper.slides.eq(swiper.activeIndex).find('.visual__contents').addClass('visual__contents--fadein');

			video[swiper.activeIndex].play();

			target.removeClass('visual__video--visible');
		},
		onSlideChangeStart: function(swiper) {
			const video = swiper.slides.find('video').get();
			const target = $('.desktop .visual .visual__control').find('.visual__video');
			let realIndex = swiper.slides.eq(swiper.activeIndex).attr('data-swiper-slide-index') || swiper.activeIndex;

			for (let i = 0; i < video.length; i++) {
				video[i].pause();
			}

			target.removeClass('visual__video--visible');

			if (Number(realIndex) + 1 == swiper.slides.length - 2) {
				target.first().addClass('visual__video--visible');
			} else {
				target.eq(Number(realIndex) + 1).addClass('visual__video--visible');
			}
		},
		onSlideChangeEnd: function(swiper) {
			const video = swiper.slides.find('video').get();

			video[swiper.activeIndex].play();
		},
	});

	$(document).on('mouseenter mouseleave', '.desktop .visual .visual__control', function(event){
		if (event.type === 'mouseenter') {
			const target = $(this).find('.visual__video');
			let realIndex = visualSwiper.slides.eq(visualSwiper.activeIndex).attr('data-swiper-slide-index') || visualSwiper.activeIndex;
			
			target.removeClass('visual__video--visible');

			if (Number(realIndex) + 1 == visualSwiper.slides.length - 2) {
				target.first().addClass('visual__video--visible');
			} else {
				target.eq(Number(realIndex) + 1).addClass('visual__video--visible');
			}
		}
		if (event.type === 'mouseleave') {
			const target = $(this).find('.visual__video');

			target.removeClass('visual__video--visible');
		}
	});

	$('.visual .visual__control').on('click', function(){
		visualSwiper.slideNext();
	});

	$('.best-menu .best-menu__item .swiper-container').swiper();

	$('.celeb-curation .celeb-curation__swiper .swiper-container').swiper({
		nextButton: '.celeb-curation .celeb-curation__swiper .swiper-button-next',
		prevButton: '.celeb-curation .celeb-curation__swiper .swiper-button-prev'
	});

	const screenTarget = $('.celeb-curation__screen');
	const screenTargetOffset = screenTarget.offset().top;
	const screenTargetHeight = screenTarget.height();

	$(window).scroll(function(){
		let scrollTop = $(window).scrollTop();
		if (scrollTop >= screenTargetOffset - screenTargetHeight / 3) {
			screenTarget.addClass('celeb-curation__screen--opened');
		}
	});
});