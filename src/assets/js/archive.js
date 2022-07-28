jQuery.noConflict();

(function($) {
  $(function(){
		$('.archive-detail__trigger').on('click', function(){
			$(this).toggleClass('archive-detail__trigger--active').closest('.archive-detail__floating').find('.archive-detail__contents').toggleClass('archive-detail__contents--hidden').closest('.archive-detail').find('.archive-detail__dimmed').toggleClass('archive-detail__dimmed--opened');
			$(this).closest('.archive-detail__tail').toggleClass('archive-detail__tail-toggle');
		});

		$(document).on('click', '.mobile .archive-detail .archive-detail__dimmed', function(){
			if ($(this).hasClass('archive-detail__dimmed--opened')) {
				$(this).removeClass('archive-detail__dimmed--opened');
				$('.archive-detail .archive-detail__trigger').addClass('archive-detail__trigger--active');
				$('.archive-detail .archive-detail__contents').addClass('archive-detail__contents--hidden');
				$('.archive-detail .archive-detail__tail').addClass('archive-detail__tail-toggle');
			} 
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