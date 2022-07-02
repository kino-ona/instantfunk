var productSwiper = new Swiper('.productDetailswp', {
  pagination: '.swiper-pagination',
});

$(function() {
  var $w = $(window),
    footerHei = $('.footer').outerHeight(),
    $banner = $('.detail_info');

  if($w > 750) {
    $w.on('scroll', function() {
      var sT = $w.scrollTop();
      var val = $(document).height() - $w.height() - footerHei;
  
      if (sT > val) {
        $banner.addClass('on')
      } else {
        $banner.removeClass('on')
      }
    });
  } else {

    console.log($banner.height())
    $option = $('.detail_info').find('.product__option');
    $optionH = $option.height();

    $option.css({
      top: $banner.height() + 55
    });
    $('.product__additional').css({
      'margin-top': $optionH + 100
    })
    
  }

});