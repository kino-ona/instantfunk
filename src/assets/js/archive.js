jQuery.noConflict();

(function($) {
  $(document).ready(function(){
		function archiveDetailInfo() {
      var target = $('.archive-detail');
      var targetOffset = target.offset().top;
      var targetHeight = target.height();
      var winHeight = $(window).height();
  
      if ($(window).scrollTop() > (targetOffset + targetHeight - winHeight)) {
        target.find('.archive-detail__info').addClass('archive-detail__info--absoluted');
      } else {
        target.find('.archive-detail__info').removeClass('archive-detail__info--absoluted');
      }
    }

		if ($('.archive-detail').length > 0) {
			archiveDetailInfo();
      $(window).scroll(function(){
        archiveDetailInfo()
      });
    }
	});
})(jQuery);