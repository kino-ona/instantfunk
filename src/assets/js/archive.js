jQuery.noConflict();

(function($) {
  $(function(){
		$('.archive-detail__trigger').on('click', function(){
			$(this).toggleClass('archive-detail__trigger--active');
		});
	});
})(jQuery);