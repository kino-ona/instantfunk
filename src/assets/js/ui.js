jQuery.noConflict();

(function($) {

	/*!
     * c2-accordion
     * https://github.com/TheC2Group/accordion
     * @version 2.7.1
     * @license MIT (c) The C2 Group (c2experience.com)
     *
     * �댁젣 : defaultAcc.destroy();
     */
	var Accordion=function(t){"use strict";t="default"in t?t.default:t;var e=0,a={item:".accord_item",target:".accord_title",control:".accord_title",panel:".accord_panel",allowMultiple:!0,attribute:"data-status",expanded:"expanded",contracted:"contracted",prefix:"uiAccor-",transition:"height .3s",transitionSupport:!0,setFocus:"none",hashEnabled:!1},i=function(t){var e=this.items[t];e.$el.removeAttr("style"),e.isExpanded?function(t){var e=this.opts.setFocus;switch(e){case"item":t.el.focus();break;case"panel":case"target":case"control":t[e].focus();break;case"first":t.$panel.find("a, :input").first().each(function(){this.focus()})}}.call(this,e):e.$panel.attr("aria-hidden","true"),e.inTransition=!1},n=function(t){var e=this.items[t];if(!e.isExpanded){var a=e.$control.outerHeight();e.inTransition||(e.$el.height(a),e.el.getBoundingClientRect(),e.el.style.transition=this.opts.transition,e.inTransition=!0),e.$el.attr(this.opts.attribute,this.opts.expanded),e.$target.attr("aria-expanded","true"),this.opts.allowMultiple||e.$target.attr("aria-selected","true"),e.$panel.attr("aria-hidden","false");var i=e.$panel.outerHeight();this.opts.transitionSupport&&e.$el.height(a+i),e.isExpanded=!0,"target"===this.opts.setFocus&&e.target.focus()}},r=function(t){var e=this.items[t];if(e.isExpanded){var a=e.$control.outerHeight();if(!e.inTransition){var n=e.$panel.outerHeight();e.$el.height(a+n),e.el.getBoundingClientRect(),e.el.style.transition=this.opts.transition,e.inTransition=!0}e.$el.attr(this.opts.attribute,this.opts.contracted),e.$target.attr("aria-expanded","false"),this.opts.allowMultiple||e.$target.attr("aria-selected","false"),this.opts.transitionSupport&&e.$el.height(a),e.isExpanded=!1,this.opts.transitionSupport||i.call(this,t)}},s=function(t){var e=this;this.items.forEach(function(a,i){i!==t&&a.isExpanded&&r.call(e,i)})},o=function(t){this.items[t].isExpanded?r.call(this,t):(this.opts.allowMultiple||s.call(this,t),n.call(this,t))},l=function(){var e=this;this.items.forEach(function(t,a){t.$target.on("click",function(t){e._enabled&&(t.preventDefault(),o.call(e,a))}),t.$el.on("transitionend",function(t){e._enabled&&t.target===t.delegateTarget&&i.call(e,a)}),t.$target.on("keydown",function(t){e._enabled&&function(t,e){return 13===t.which||32===t.which?(t.preventDefault(),void o.call(this,e)):35===t.which?(t.preventDefault(),void this.items[this.items.length-1].target.focus()):36===t.which?(t.preventDefault(),void this.items[0].target.focus()):37===t.which||38===t.which?(t.preventDefault(),void function(t){var e=t-1;e<0&&(e=this.items.length-1),this.items[e].target.focus()}.call(this,e)):39===t.which||40===t.which?(t.preventDefault(),void function(t){var e=t+1;e>=this.items.length&&(e=0),this.items[e].target.focus()}.call(this,e)):void 0}.call(e,t,a)})}),t(window).on("hashchange",function(){e.opts.hashEnabled&&e._enabled&&c.call(e)})},c=function(){var t=this;if(document.location.hash){var e=document.location.hash.split("#")[1];t.items.forEach(function(a,i){a.el.dataset.hash===e&&o.call(t,i)})}},h=function(i,n){e+=1,this.count=e,this.$el=t(i),this.opts=t.extend({},a,n),this._enabled=!0,this.$el.attr("role")||this.$el.attr("role","tablist"),this.opts.allowMultiple&&this.$el.attr("aria-multiselectable","true"),this.items=function(){var e=this;return t.map(this.$el.find(this.opts.item),function(a,i){var n=t(a),r=n.find(e.opts.target),s=e.opts.target===e.opts.control?r:n.find(e.opts.control),o=n.find(e.opts.panel);r.attr("role")||r.attr("role","tab"),o.attr("role")||o.attr("role","tabpanel");var l=n.attr(e.opts.attribute),c=l===e.opts.expanded;switch(l||n.attr(e.opts.attribute,c?e.opts.expanded:e.opts.contracted),r.attr("aria-expanded",c),e.opts.allowMultiple||r.attr("aria-selected",c),o.attr("aria-hidden",!c),e.opts.setFocus){case"item":if(n.attr("tabindex"))return;n.attr("tabindex","-1");break;case"panel":if(o.attr("tabindex"))return;o.attr("tabindex","-1");break;case"target":if(r.attr("tabindex"))return;r.attr("tabindex","0");break;case"control":if(s.attr("tabindex"))return;s.attr("tabindex","-1")}var h=r.attr("id");return h?r.attr("data-original-id",!0):(h=e.opts.prefix+e.count+"-"+(i+1),r.attr("id",h)),o.attr("aria-labelledby")?o.attr("data-original-labelledBy",!0):o.attr("aria-labelledby",h),{$el:n,el:a,$target:r,target:r[0],$control:s,control:s[0],$panel:o,panel:o[0],isExpanded:c,inTransition:!1}})}.call(this),l.call(this),this.opts.hashEnabled&&c.call(this)};return h.prototype.activate=o,h.prototype.expand=n,h.prototype.contract=r,h.prototype.contractAll=s,h.prototype.enable=function(){return this._enabled=!0,this},h.prototype.disable=function(){return this._enabled=!1,this},h.prototype.destroy=function(){(function(){this._enabled=!1}).call(this)},h}(jQuery);

	/*!
     * c2-event-handler
     * https://github.com/TheC2Group/event-handler
     * @version 2.5.2 (c) The C2 Group (c2experience.com)
     * @license MIT
     */
	var eventHandler=function(){"use strict";var t=function(e,n){var i=this;"string"==typeof e&&e.length&&void 0!==n&&(e.indexOf(" ")>-1?e.split(" ").forEach(function(e){t.call(i,e,n)}):(this._events=this._events||{},this._events[e]=this._events[e]||[],this._events[e].push(n)))},e=function(t,n){var i=this;if("string"==typeof t&&t.length)if(t.indexOf(" ")>-1)t.split(" ").forEach(function(t){e.call(i,t,n)});else if(this._events=this._events||{},t in this._events!=!1)if(void 0!==n){var s=this._events[t].indexOf(n);s>-1&&(1===this._events[t].length?delete this._events[t]:this._events[t].splice(s,1))}else delete this._events[t]},n=function(t){for(var e=this,i=arguments.length,s=Array(i>1?i-1:0),o=1;o<i;o++)s[o-1]=arguments[o];var f=t.lastIndexOf(":");f>-1&&n.call.apply(n,[this,t.substring(0,f)].concat(s)),this._events=this._events||{},t in this._events!=!1&&this._events[t].forEach(function(t){t.apply(e,s)})},i=function(){},s=i.prototype;s.on=t,s.off=e,s.emit=n,s.bind=t,s.unbind=e,s.trigger=n;var o=function(s){return 0===arguments.length?new i:("function"==typeof s&&(s.prototype.on=t,s.prototype.off=e,s.prototype.emit=n),"object"==typeof s&&(s.on=t,s.off=e,s.emit=n),s)};return o.EventConstructor=i,o}();
	
	$(function () {
		/* iphone scroll bug */
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);

		window.addEventListener('resize', () => {
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		});

		$(window).resize(function(){
			winSizeCheck();
		});
		winSizeCheck();
		function winSizeCheck() {
			let winWidth = $(window).width();
			if (winWidth >= 1024) {
				$('html').removeClass('mobile');
				$('html').addClass('desktop');
				$('.nav').removeClass('nav--opened nav--closed');
				$('.header .header__search').removeClass('header__search--hide');
				$('.header .header__mobile').text('MENU');
			} else {
				$('html').removeClass('scrolllock');
				$('body').css('top', '');
				$('html').removeClass('desktop');
				$('html').addClass('mobile');
				$('.nav').removeClass('nav--opened nav--closed');
				$('.header .header__search').removeClass('header__search--hide');
				$('.header .header__mobile').text('MENU');
			}
		}

		var navOpend;

		$(window).scroll(function(){	
			if (navOpend) {
				$('.header .nav__dimmed--opened').trigger('click');
			}
		});

		$(document).on('click', '.header .nav__trigger', function(){
			$('.header .search__layer').removeClass('search__layer--opened');
			$('.header .search__dimmed').removeClass('search__dimmed--opened');
			$(this).siblings('.nav__trigger').removeClass('nav__trigger--active');
			$(this).toggleClass('nav__trigger--active');
			if(!$(this).hasClass('nav__trigger--active')) {
				$('.header .nav__dimmed').removeClass('nav__dimmed--opened');
				navOpend = false;
			} else {
				$('.header .nav__dimmed').addClass('nav__dimmed--opened');
				navOpend = true;
			}
		});

		$(document).on('click', '.header .nav__dimmed--opened', function(){
			$(this).removeClass('nav__dimmed--opened');
			$('.header .nav__trigger').removeClass('nav__trigger--active');
			navOpend = false;
		});

		$(document).on('click', '.header .header__mobile', function(){
			$('.header .search__layer').removeClass('search__layer--opened');
			$('.header .search__dimmed').removeClass('search__dimmed--opened');

			if (!$('.nav').hasClass('nav--opened')) {
				var scroll = $(window).scrollTop();
				$('html').addClass('scrolllock');
				$('body').css('top', -scroll+'px');
				$('.nav').removeClass('nav--closed').addClass('nav--opened');
				$('.header .header__search').addClass('header__search--hide');
				$(this).text('CLOSE');
			} else {
				var posY = $('body').css('top');
				var scroll = posY.replace(/-/,'').replace('px','');
				$('html').removeClass('scrolllock');
				$('body').css('top', '');
				$(window).scrollTop(scroll);
				$('.nav').removeClass('nav--opened').addClass('nav--closed');
				$('.header .header__search').removeClass('header__search--hide');
				$(this).text('MENU');
			}
		});

		$(document).on('click', '.header .header__funkplay', function(){
			$(this).toggleClass('header__funkplay--active');
		});

		$(document).on('click', '.header .header__search', function(){
			const target = $('.header .search__layer');
			$('.header .nav__trigger').removeClass('nav__trigger--active');
			$('.header .nav__dimmed--opened').trigger('click');
			if (!target.hasClass('search__layer--opened')) {
				$('.search__dimmed').addClass('search__dimmed--opened');
				target.addClass('search__layer--opened');
			} else {
				$('.search__dimmed').removeClass('search__dimmed--opened');
				target.removeClass('search__layer--opened');
			}
		});

		$(document).on('click', '.header .search__dimmed--opened', function(){
			$(this).removeClass('search__dimmed--opened');
			$('.header .search__layer').removeClass('search__layer--opened');
		});

		// accordion
		$('.accord_wrap').each(function () {
			if (!$(this).hasClass('manualfn')) {
				if ($(this).hasClass('multiple')) {
					defaultAcc = new Accordion($(this), {
						allowMultiple: true,
					});
				} else {
					defaultAcc = new Accordion($(this), {
						allowMultiple: false,
					});
				}
			}
		});
	});

	function accoSet(setId, multiTF, setFocus) {
		if (!setId) {
			setId = '.accord_wrap';
		} else {
			var setId = $('#' + setId);
		}
		if (!multiTF) multiTF = false;
		if (!setFocus) setFocus = 'accord_panel';

		defaultAcc = new Accordion(setId, {
			allowMultiple: multiTF,
			setFocus: setFocus,
			transition: 'height 0s',
			transitionSupport: false,
		});
	}

	// review sorting
	$(function () {
		$(document).on('click', '.review_sort--head', function(){
			var $sortHead = $('.review_sort--head');

			if(!$sortHead.parent('.review__sort').hasClass('isOpen')) {
				$sortHead.parent('.review__sort').addClass('isOpen');
			} else {
				$sortHead.parent('.review__sort').removeClass('isOpen');
			}
		});

		$('.review__sorting').find('.sort__select').each(function () {
			$(this).on('click', function(){
				var $sortTxt = $(this).html();

				$(this).parents('.review__sort').removeClass('isOpen');
				$(this).parents('.review__sort').find('li').removeClass('selected');
				$(this).parent('li').addClass('selected');
				$(this).parents('.review__sort').find('.review_sort--head span').html($sortTxt);
			});
		});
	})

	// modal show/hide
	$(function () {
		$('.modal__show').each(function () {
			$(this).on('click', function(){
				var $target = $(this).attr('data-layer');

				$('#' + $target).show();
			});
		});
		$('.modal__hide').each(function () {
			$(this).on('click', function(){
				var $target = $(this).attr('data-layer');

				$('#' + $target).hide();
			});
		});

	})
	

	$(function() {
		// if ($('[data-footer=true]').length) {
		// 	const $w = $(window);
		// 	let timeout = null;
	
		// 	$w.on('scroll', function() {
		// 		const sT = window.pageYOffset + window.innerHeight
		// 		const val = window.pageYOffset + document.querySelector('.footer_copyright').getBoundingClientRect().top
	
		// 		if (sT > val) {
		// 			clearTimeout(timeout);
		// 			timeout = setTimeout(function() {
		// 				$('.footer .btn__funkplay').addClass('__active');
		// 			}, 200);
		// 		} else {
		// 			$('.footer .btn__funkplay').removeClass('__active');
		// 		}
		// 	});

		// 	/*
		// 	* Footer Scroll Event
		// 	**/
		// 	const setLogoAnimation = () => {
		// 		const $footer = document.querySelector('.footer')
		// 		const fLogoHeight = $footer.querySelector('.footer__funkplay').getBoundingClientRect().height
		// 		const fCsHeight = $footer.querySelector('.footer__cs').getBoundingClientRect().height
		// 		const startPosition = window.pageYOffset + $footer.querySelector('.footer__funkplay').getBoundingClientRect().top + fLogoHeight / 2
		// 		const scrollRange = fCsHeight + fLogoHeight / 2
				
		// 		let distance = window.matchMedia('only screen and (max-width: 1024px)').matches ? fLogoHeight / 9 : fLogoHeight / 5
		// 		let scrollProgress = ((window.pageYOffset + window.innerHeight - startPosition) / scrollRange).toFixed(5)
	
		// 		if (scrollProgress >= 1) {
		// 			window.removeEventListener('scroll', setLogoAnimation)
		// 			window.removeEventListener('resize', setLogoAnimation)
		// 		}
				
		// 		scrollProgress = scrollProgress < 0 ? 0 : scrollProgress > 1 ? 1 : scrollProgress
		// 		$footer.style.setProperty('--distance', `${distance}px`)
		// 		$footer.style.setProperty('--progress', `${scrollProgress}`)
		// 	}
	
		// 	window.addEventListener('scroll', setLogoAnimation)
		// 	window.addEventListener('resize', setLogoAnimation)
		// }
	});
})(jQuery);