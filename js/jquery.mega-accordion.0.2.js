/**
 * Mega Accordion 0.2
 * Author: David Bertrand, Imaginary Landscape LLC
 * Date: Wed Jun 9 2010
 * Updated: Tue Jun 29, 2010
 * Copyright: everyone
**/
(function($) {
	$.fn.ma = function(settings) {
		var o = {			// default config
			close : true, 		// will include a close link in the content div
			subarrows : true, 	// will add arrows on list items containing sub-content
			animatehover: true, 	// will animate margin for accordion links
			hspd: 'fast', 		// speed of hover animation
			tspd: 'fast', 		// speed of transition animation
			acls: 'active',         // class of currently open link
			opacity: .9 		// will give content areas an opacity value (number 0-1 or false)
		};
		if(settings) $.extend(true, o, settings);
		return this.each(function() {
                        var accordion = $(this);
			var area = accordion.children('div');
			area.hide();
			if(o.subarrows){
				accordion.children('a').prepend('&#187; ');
			}
			if(o.opacity){
				area.css('opacity', o.opacity);
			}
			if (o.close){
				area.append('<a href="#" class="ma-close">close</a>');
				$('a.ma-close').click(function() {
					$(this).parent().hide(o.tspd).prev('a').removeClass(o.acls);
					return false;
				});
			}
			if(o.animatehover){
				$('>a',this).hover(function() {
					$(this).stop().animate({marginRight: 10}, o.hspd);
				}, function() {
					$(this).stop().animate({marginRight: 0}, o.hspd);
				});
			}
			accordion.children('a').toggle(function() {
				$(this).addClass(o.acls).next().show(o.tspd);
				return false;
			}, function () {
           $(this).removeClass(o.acls).next().hide(o.tspd);
           return false;				
			});
		});
	};
})(jQuery);
