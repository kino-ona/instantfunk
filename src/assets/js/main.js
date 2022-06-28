$(document).ready(function(){
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