$(document).ready(function(){
	setTimeout(function(){
		const video = $('.visual .swiper-container').find('.swiper-slide').find('video').get();
		$('.visual .swiper-container').swiper({
			pagination: '.swiper-pagination',
      paginationType: 'fraction',
			onInit: function(swiper) {
				console.log(video);
				video[swiper.activeIndex].play();
			},
			onSlideChangeStart: function(swiper) {
				for (let i = 0; i >= video.length; i++) {
					video[i].pause();
				}
			},
			onSlideChangeEnd: function(swiper) {
				video[swiper.activeIndex].play();
			}
		});
	}, 800);

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
		if (scrollTop >= screenTargetOffset - screenTargetHeight) {
			screenTarget.addClass('celeb-curation__screen--opened');
		}
	});
});