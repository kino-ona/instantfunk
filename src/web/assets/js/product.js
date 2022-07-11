$(document).ready(function(){
  var productSwiper = new Swiper('.productDetailswp', {
		pagination: {
			el: '.productDetailswp .swiper-pagination'
		}
  });

  $('.product-list .product-list__trigger').click(function(){
    if (!$(this).hasClass('product-list__trigger--active')) {
      $(this).addClass('product-list__trigger--active');
    } else {
      $(this).removeClass('product-list__trigger--active');
    }
  });

  $('.product-list .product-list__option .product-list__item').click(function(){
    var item = $(this).text();
    $(this).parent('.product-list__option').prev('.product-list__trigger').removeClass('product-list__trigger--active').find('.product-list__text').text(item);
  });

  function productListSort() {
    var target = $('.product-list');
    var targetOffset = target.offset().top;
    var targetHeight = target.height();
    var winHeight = $(window).height();

    if ($(window).scrollTop() > (targetOffset + targetHeight - winHeight - 62)) {
      target.find('.product-list__sort').addClass('product-list__sort--absoluted');
    } else {
      target.find('.product-list__sort').removeClass('product-list__sort--absoluted');
    }
  }
  
  if ($('.product-list .product-list__trigger').length > 0) {
    $(window).scroll(function(){
      productListSort();
    });
  }

  $('.product-list .menu .menu__swiper').each(function(){
    productListSwiper = new Swiper($(this), {
      speed: 600,
      pagination: {
        el: $(this).find('.swiper-pagination'),
        type: 'progressbar'
      },
      breakpointsInverse: true,
      breakpoints: {
        750: {
          allowTouchMove: false,
        }
      }
    });
  });

  $(document).on('mouseenter mouseleave', '.desktop .product-list .menu .menu__swiper', function(event){
    if (event.type === 'mouseenter') {
      this.swiper.autoplay.start();
    }
    if (event.type === 'mouseleave') {
      this.swiper.autoplay.stop();
    }
  });

  $('.product-list .menu .menu__link').click(function(event){
    var el = $(this).closest('.menu__item');
    el.find('.menu__layer').addClass('menu__layer--opened');
    event.preventDefault();
  });

  $('.product-list .menu .menu__dimmed').click(function(){
    var el = $(this).closest('.menu__item');
    el.find('.menu__layer').removeClass('menu__layer--opened');
  });

  $('.product-list .menu .menu__button--cart').click(function(){
    var el = $(this).closest('.menu__item');
    el.find('.menu__option').addClass('menu__option--opened');
  });

  $('.product-list .menu .menu__close').click(function(){
    var el = $(this).closest('.menu__item');
    el.find('.menu__option').removeClass('menu__option--opened');
  });
});

$(function() {

  var $w = $(window),
    footerHei = $('.footer').outerHeight(),
    $banner = $('.detail_info');

  if($w.width() > 750) {
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
    // console.log($banner.height())
    $banner.removeClass('on')

    $w.on('scroll', function() {
      var msT = $w.scrollTop();
      var moptPos = $('.detail__container .product__option').position().top - 187;
      console.log(moptPos)
      if (msT >= moptPos) {
        $('.mo__fixed__option').addClass('hide')
      }else{
        $('.mo__fixed__option').removeClass('hide')
      }

    });

    // $option = $('.detail_info').find('.product__option');
    // $optionH = $option.height();

    // $option.css({
    //   top: $banner.height() + 55
    // });
    // $('.product__additional').css({
    //   'margin-top': $optionH + 100
    // })
    
  }

  if($('.card_board').length > 0) {
		$('.review__list .card_board').cardGrid({
	    no_columns: 2,
	    padding_x: 0,
	    single_column_breakpoint: 1400
	  });
	}
});


/*****
  Pinterest Grid Plugin
	http://blog.johnavis.com/blog/828/enhanced-simple-pinterest-style-grid-layout-jquery-plugin/
*****/
!function(t,i,n,o){var e,a,s,c="cardGrid",h={padding_x:10,padding_y:10,no_columns:3,margin_bottom:50,single_column_breakpoint:700};function l(i,n){this.element=i,this.options=t.extend({},h,n),this._defaults=h,this._name=c,this.init()}l.prototype.init=function(){var n,o=this;t(i).resize(function(){clearTimeout(n),n=setTimeout(function(){o.make_layout_change(o)},11)}),o.make_layout_change(o);var e=setTimeout(function(){t(i).resize(),clearTimeout(e)},500)},l.prototype.calculate=function(n){var o=this,c=0,h=t(this.element);h.width();a=t(this.element).children(),s=!0===n?h.width()-o.options.padding_x:(h.width()-o.options.padding_x*o.options.no_columns)/o.options.no_columns,a.each(function(){t(this).css("width",s)}),e=o.options.no_columns,a.each(function(i){var a,h=0,l=0,u=t(this),p=u.prevAll();a=!1===n?i%e:0;for(var r=0;r<e;r++)u.removeClass("c"+r);i%e==0&&c++,u.addClass("gcol"+a),u.addClass("grow"+c),p.each(function(i){t(this).hasClass("gcol"+a)&&(l+=t(this).outerHeight()+o.options.padding_y)}),h=!0===n?0:i%e*(s+o.options.padding_x),u.css({left:h,top:l})}),this.tallest(h),t(i).resize()},l.prototype.tallest=function(i){for(var n,o=[],a=0;a<e;a++){var s=0;i.find(".gcol"+a).each(function(){s+=t(this).outerHeight()}),o[a]=s}n=Math.max.apply(Math,o),i.css("height",n+(this.options.padding_y+this.options.margin_bottom))},l.prototype.make_layout_change=function(n){t(i).width()<n.options.single_column_breakpoint?n.calculate(!0):n.calculate(!1)},t.fn[c]=function(i){return this.each(function(){t.data(this,"plugin_"+c)||t.data(this,"plugin_"+c,new l(this,i))})}}(jQuery,window,document);


