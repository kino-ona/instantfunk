jQuery.noConflict();

(function($) {
  $(function(){
		$('.archive-detail__trigger').on('click', function(){
			$(this).toggleClass('archive-detail__trigger--active').closest('.archive-detail').find('.archive-detail__dimmed').toggleClass('archive-detail__dimmed--opened');
		});

		if ($('.archive-detail').length > 0) {
			var elementTop, elementBottom, viewportTop, viewportBottom;

			function isScrolledIntoView(elem) {
				elementTop = $(elem).offset().top;
				elementBottom = elementTop + $(elem).outerHeight();
				viewportTop = $(window).scrollTop();
				viewportBottom = viewportTop + $(window).height();
				return (elementBottom > viewportTop && elementTop < viewportBottom);
			}
			
			$(window).scroll(function(){
				$('video').each(function(){
					if (isScrolledIntoView(this) == true) {
						$(this)[0].play();
					} else {
						$(this)[0].pause();
					}
				});
			});

			$('video').each(function(){
				if (isScrolledIntoView(this) == true) {
					$(this)[0].play();
				} else {
					$(this)[0].pause();
				}
			});
		}
	});
})(jQuery);