$(document).ready(function(){
	setTimeout(function(){
		const visualSwiper = new Swiper('.visual .swiper-container', {
			pagination: '.swiper-pagination',
			// paginationClickable: true,
			// nextButton: '.visual .swiper-button-next',
			// prevButton: '.visual .swiper-button-prev'
		});
	}, 800);

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