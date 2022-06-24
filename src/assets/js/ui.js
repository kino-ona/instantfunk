$(document).on('click', '.nav__trigger', function(){
	$(this).siblings('.nav__trigger').removeClass('nav__trigger--active');
	$(this).toggleClass('nav__trigger--active');
});

$(document).on('click', '.header__funkplay', function(){
	$(this).toggleClass('header__funkplay--active');
})