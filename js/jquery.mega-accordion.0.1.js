/**
 * Mega Accordion 0.1
 * Author: David Bertrand
 * Date: Wed Jun 9 2010
 * Copyright: everyone
**/
(function($) {
	$.fn.ma = function(settings) {
		var o = {			// default config
			close : true, 		// will include a close link in the content div
			subarrows : true, 	// will add arrows on list items containing sub-content
			animatehover: true, 	// will animate left margin for accordion links
			hspd: 'fast', 		// speed of hover animation
			tspd: 'fast', 		// speed of transition animation
			acls: 'active',
			opacity: .9 		// will give content areas an opacity value (number 0-1 or false)
		};
		if(settings) $.extend(true, o, settings);
		this.each(function() {
                        var accordion = $(this);
			var lis = accordion.children('li').has('div');
			var areas = lis.children('div');
			areas.hide();
			if(o.subarrows){
				lis.children('a').prepend('&#187; ');
			}
			if(o.opacity){
				areas.css('opacity', o.opacity);
			}
			if (o.close){
				areas.append('<a href="#" class="ma-close"></a>');
				$('a.ma-close').click(function() {
					close();
				});
			}
			if(o.animatehover){
				$('>li>a',accordion).hover(function() {
					$(this).stop().animate({ marginLeft: 10 }, o.hspd);
				}, function() {
					$(this).stop().animate({ marginLeft: 0 }, o.hspd);
				});
			}
			lis.children('a').click(function() {
				if(!$(this).hasClass(o.acls)){	
					close();
					$(this).addClass(o.acls).hide().next().show(o.tspd);
				}
				return false;
			});
			function close() {
				$('.'+o.acls+'',accordion).removeClass(o.acls).show().next().hide(o.tspd);
			}
		});
		return this;
	};
})(jQuery);
