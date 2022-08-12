jQuery.noConflict();

(function($) {
  $(function(){
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
        1024: {
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
      var item = $(this).html();
      $(this).parent('.product-list__option').prev('.product-list__trigger').removeClass('product-list__trigger--active').find('.product-list__text').html(item);
    });
  
    var productListSwiper = new Swiper('.product-list .menu .menu__item:not(.menu__item--soldout) .menu__swiper', {
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
				1024: {
					allowTouchMove: false
				}
			},
			on: {
        breakpoint: function(swiper, breakpointParams) {
          if (!breakpointParams.allowTouchMove) {
						swiper.loopDestroy();
						swiper.params.loop = false;
						swiper.slideTo(0, false);
						swiper.autoplay.stop();
					} else {
						swiper.loopCreate();
						swiper.params.loop = true;
						swiper.slideToLoop(0);
					}
        },
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

    $('.product-list .menu .menu__swiper').on('click', function(){
      var el = $(this).closest('.menu__item');
      if(!el.find('.menu__swiper').next('.button').hasClass('button--visible')) {
        el.find('.menu__swiper').next('.button').removeClass('button--hidden').addClass('button--visible');
      } else {
        el.find('.menu__swiper').next('.button').removeClass('button--visible').addClass('button--hidden');
      }
    });
  
    $('.product-list .menu .button__item--cart').click(function(){
      var el = $(this).closest('.menu__item');
      el.find('.menu__layer').addClass('menu__layer--opened');
      optText();
    });
  
    $('.product-list .menu .menu__close').click(function(){
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

      if($w.width() > 1024) {
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
  
  /*
    Pinterest Grid Plugin
    Copyright 2014 Mediademons
    @author smm 16/04/2014
  */
  ;(function ($, window, document, undefined) {
    var pluginName = 'cardGrid',
        defaults = {
            padding_x: 10,
            padding_y: 10,
            no_columns: 3,
            margin_bottom: 50,
            single_column_breakpoint: 700
        },
        columns,
        $article,
        article_width;

    function Plugin(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options) ;
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype.init = function () {
        var self = this,
            resize_finish;

        $(window).resize(function() {
            resize_finish = setTimeout( function () {
                self.make_layout_change(self);
                clearTimeout(resize_finish);
            }, 20);

        });

        self.make_layout_change(self);

        setTimeout(function() {
            $(window).resize();
        }, 500);
    };

    Plugin.prototype.calculate = function (single_column_mode) {
        var self = this,
            tallest = 0,
            row = 0,
            $container = $(this.element),
            container_width = $container.width();
            $article = $(this.element).children();

        if(single_column_mode === true) {
            article_width = $container.width() - self.options.padding_x;
        } else {
            article_width = ($container.width() - self.options.padding_x * self.options.no_columns) / self.options.no_columns;
        }

        $article.each(function() {
            $(this).css('width', article_width);
        });

        columns = self.options.no_columns;

        $article.each(function(index) {
            var current_column,
                left_out = 0,
                top = 0,
                $this = $(this),
                prevAll = $this.prevAll(),
                tallest = 0;

            if(single_column_mode === false) {
                current_column = (index % columns);
            } else {
                current_column = 0;
            }

            for(var t = 0; t < columns; t++) {
                $this.removeClass('c'+t);
            }

            if(index % columns === 0) {
                row++;
            }

            $this.addClass('c' + current_column);
            $this.addClass('r' + row);

            prevAll.each(function(index) {
                if($(this).hasClass('c' + current_column)) {
                    top += $(this).outerHeight() + self.options.padding_y;
                }
            });

            if(single_column_mode === true) {
                left_out = 0;
            } else {
                left_out = (index % columns) * (article_width + self.options.padding_x);
            }

            $this.css({
                'left': left_out,
                'top' : top
            });
        });

        this.tallest($container);
        $(window).resize();
    };

    Plugin.prototype.tallest = function (_container) {
        var column_heights = [],
            largest = 0;

        for(var z = 0; z < columns; z++) {
            var temp_height = 0;
            _container.find('.c'+z).each(function() {
                temp_height += $(this).outerHeight();
            });
            column_heights[z] = temp_height;
        }

        largest = Math.max.apply(Math, column_heights);
        _container.css('height', largest + (this.options.padding_y + this.options.margin_bottom));
    };

    Plugin.prototype.make_layout_change = function (_self) {
        if($(window).width() < _self.options.single_column_breakpoint) {
            _self.calculate(true);
        } else {
            _self.calculate(false);
        }
    };

    $.fn[pluginName] = function (options) {
      return this.each(function () {
        if (!$.data(this, 'plugin_' + pluginName)) {
            $.data(this, 'plugin_' + pluginName,
            new Plugin(this, options));
        }
      });
    }
  })(jQuery, window, document);

})(jQuery);