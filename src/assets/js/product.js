jQuery.noConflict();

(function($) {
  $(document).ready(function(){
    var productSwiper = new Swiper('.productDetailswp', {
      pagination: {
        el: '.productDetailswp .swiper-pagination'
      }
    });
    var productReview = new Swiper('.productReview', {
      loop: true,
      speed: 1100,
      autoplay: false,
      slidesPerView: 1.5,
      spaceBetween: 8,
      direction: 'horizontal',
      breakpointsInverse: true,
      breakpoints: {
        750: {
          direction: 'vertical',
          autoplay: true,
          slidesPerView: 'auto',
          spaceBetween: 0,
          allowTouchMove: false
        }
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
  
      if ($(window).scrollTop() > (targetOffset + targetHeight - winHeight)) {
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
  
    var productListSwiper = new Swiper('.product-list .menu .menu__item .menu__swiper', {
      speed: 300,
			effect: 'creative',
			creativeEffect: {
				next: {
					translate: ['100%', 0, 1],
				},
				prev: {
					translate: [0, 0, -1],
				}
			},
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar'
      },
			autoplay: {
				enabled: false,
				delay: 500
			},
			breakpoints: {
				750: {
					allowTouchMove: false
				}
			},
			on: {
				slidePrevTransitionStart: function(swiper) {
					if (!swiper.allowTouchMove) {
						var offset = '-' + swiper.slides[swiper.slides.length - 1].swiperSlideOffset - swiper.width + 'px';
						swiper.autoplay.stop();
						for (var i = 1; i < swiper.slides.length - 1; i++) {
							swiper.slides[i].style.transform = 'translate3d('+offset+', calc(0px), calc(1px)) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)';
						}
						swiper.slides[swiper.slides.length - 1].style.transform = 'translate3d('+offset+', calc(0px), calc(1px)) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)';
						swiper.autoplay.start();
					}
				},
				slidePrevTransitionEnd: function(swiper) {
					if (!swiper.allowTouchMove) {
						swiper.update();
					}
				}
			}
		});
  
    $(document).on('mouseenter mouseleave', '.desktop .product-list .menu .menu__item:not(.menu__item--soldout)', function(event){
      swiper = $(this).find('.swiper')[0].swiper;
			if (event.type === 'mouseenter') {
        $(this).find('.menu__swiper').next('.button').removeClass('button--hidden').addClass('button--visible');
				swiper.autoplay.start();
			}
			if (event.type === 'mouseleave') {
        $(this).find('.menu__swiper').next('.button').removeClass('button--visible').addClass('button--hidden');
        if(swiper.activeIndex <= swiper.slides.length - 1 && !swiper.activeIndex == 0) {
					swiper.slideTo(0);
				}
        swiper.autoplay.stop();
				swiper.update();
			}
    });
  
    $('.product-list .menu .menu__link, .search__result .menu .menu__link').click(function(event){
      var el = $(this).closest('.menu__item');
      el.find('.menu__layer').addClass('menu__layer--opened');
      event.preventDefault();
    });
  
    $('.product-list .menu .button__item--cart, .search__result .menu .menu__button--cart').click(function(){
      var el = $(this).closest('.menu__item');
      el.find('.menu__layer').addClass('menu__layer--opened');
      optText();
    });
  
    $('.product-list .menu .menu__close, .search__result .menu .menu__close').click(function(){
      var el = $(this).closest('.menu__item');
      el.find('.menu__layer').removeClass('menu__layer--opened');
    });

    function optText() {
      if($('.menu__size').length > 0) {
        $('.menu__size').textfill({
          maxFontPixels: 100
        });
        $(window).on('resize', function(){
          $('.menu__size').textfill({
            maxFontPixels: 100
          });
        });
      }
    }

    if($('.detail__container').length > 0) {
      var $w = $(window),
      footerHei = $('.footer').outerHeight(),
      $lastPos = $('.suggest__item').outerHeight(),
      $detailInfo = $('.detail_info');
      $detailQuick = $('.detail__quick');

      if($w.width() > 750) {
        $w.on('scroll', function() {
          var sT = $w.scrollTop();
          var val = $(document).height() - $w.height() - (footerHei + $lastPos);
      
          if (sT > val) {
            $detailInfo.addClass('on')
            $detailQuick.addClass('on')
          } else {
            $detailInfo.removeClass('on')
            $detailQuick.removeClass('on')
          }

          $('.product__section').each(function(){
            var secTop = $(this).position().top;
            var secID = $(this).attr('id')

            
            if (sT > secTop) {
              if(secID == 'prdDetail') {
                $('.detail__quick').find('p').removeClass('selected')
                $('.detail__quick').find('p').eq(0).addClass('selected')
              } else if(secID == 'prdGuide') {
                $('.detail__quick').find('p').removeClass('selected')
                $('.detail__quick').find('p').eq(1).addClass('selected')
              } else if(secID == 'prdTalkwalk') {
                $('.detail__quick').find('p').removeClass('selected')
                $('.detail__quick').find('p').eq(2).addClass('selected')
              } else if(secID == 'prdReview') {
                $('.detail__quick').find('p').removeClass('selected')
                $('.detail__quick').find('p').eq(3).addClass('selected')
              } else {
                // $('.detail__quick').find('p').removeClass('selected')
              }
            } 
            if (sT < $w.height()) {
              $('.detail__quick').find('p').removeClass('selected')
            }
          });
        });
      } else {
        $detailInfo.removeClass('on')
        $detailQuick.removeClass('on')
  
        $w.on('scroll', function() {
          var msT = $w.scrollTop();
          var moptPos = $('.detail__container .product__option').position().top - 277;
          var optH = $('.detail__container .product__option').outerHeight();
          
          console.log($('.detail__container .product__option').position().bottom)
          if (msT >= moptPos) {
            $('.mo__fixed__option').addClass('hide')
          }else{
            $('.mo__fixed__option').find('.opt_top').show()
            $('.mo__fixed__option').find('.opt_bottom').hide()
            $('.mo__fixed__option').removeClass('hide')
          }

          if (msT >= moptPos + optH + 300) {
            $('.mo__fixed__option').find('.opt_top').hide()
            $('.mo__fixed__option').find('.opt_bottom').css({
              'display' : 'flex'
            })
            $('.mo__fixed__option').removeClass('hide')
          }
  
        });
      }

      $('.detail__quick').find('p').each(function(){
        $(this).find('.quick_link').click(function(){
          var scrollId = $(this).attr('data-section')

          $("html, body").animate({ scrollTop: $('#' + scrollId).position().top + 100 }, 500);
        });
      });

    };

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
  !function(t,i,n,o){var e,a,s,c="cardGrid",h={padding_x:10,padding_y:10,no_columns:3,margin_bottom:50,single_column_breakpoint:700};function l(i,n){this.element=i,this.options=t.extend({},h,n),this._defaults=h,this._name=c,this.init()}l.prototype.init=function(){var n,o=this;t(i).resize(function(){}),o.make_layout_change(o);},l.prototype.calculate=function(n){var o=this,c=0,h=t(this.element);h.width();a=t(this.element).children(),s=!0===n?h.width()-o.options.padding_x:(h.width()-o.options.padding_x*o.options.no_columns)/o.options.no_columns,a.each(function(){t(this).css("width",s)}),e=o.options.no_columns,a.each(function(i){var a,h=0,l=0,u=t(this),p=u.prevAll();a=!1===n?i%e:0;for(var r=0;r<e;r++)u.removeClass("c"+r);i%e==0&&c++,u.addClass("gcol"+a),u.addClass("grow"+c),p.each(function(i){t(this).hasClass("gcol"+a)&&(l+=t(this).outerHeight()+o.options.padding_y)}),h=!0===n?0:i%e*(s+o.options.padding_x),u.css({left:h,top:l})}),this.tallest(h),t(i).resize()},l.prototype.tallest=function(i){for(var n,o=[],a=0;a<e;a++){var s=0;i.find(".gcol"+a).each(function(){s+=t(this).outerHeight()}),o[a]=s}n=Math.max.apply(Math,o),i.css("height",n+(this.options.padding_y+this.options.margin_bottom))},l.prototype.make_layout_change=function(n){t(i).width()<n.options.single_column_breakpoint?n.calculate(!0):n.calculate(!1)},t.fn[c]=function(i){return this.each(function(){t.data(this,"plugin_"+c)||t.data(this,"plugin_"+c,new l(this,i))})}}(jQuery,window,document);

})(jQuery);