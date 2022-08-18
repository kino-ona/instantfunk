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
				var menu = $('.archive-detail').find('.menu');
				var menuChild = menu.find('.menu__item').length;
				var menuHeight = menu.height();
				var winH = $(window).height();
				var scroll = $(window).scrollTop();
				var offset = menuHeight - winH;
				$('video').each(function(){
					if (isScrolledIntoView(this) == true) {
						$(this)[0].play();
					} else {
						$(this)[0].pause();
					}
				});

				if (scroll >= offset) {
					$('.desktop .archive-detail .archive-detail__floating').addClass('archive-detail__floating--absoluted').css('top', menuHeight / (menuChild / 2) * 2 + 160);
				} else {
					$('.desktop .archive-detail .archive-detail__floating').removeClass('archive-detail__floating--absoluted').css('top', '');
				}
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