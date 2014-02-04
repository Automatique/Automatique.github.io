$( document ).ready(function() {

	$('#slider1').bxSlider({
	  autoStart: false,
	  nextText: '&#8594;',
	  prevText: '&#8592;'
	});
	$('#slider2').bxSlider({
	  autoStart: false,
	  nextText: '&#8594;',
	  prevText: '&#8592;'
	});
	$('#slider3').bxSlider({
		autoStart: false,
		nextText: '&#8594;',
		prevText: '&#8592;'
	});
	$('#slider4').bxSlider({
		infiniteLoop: true,
	  	autoStart: false,
	  	nextText: '&#8594;',
	  	prevText: '&#8592;'
	});
	var mylist = $('.opdrachtgevers');
	var listitems = mylist.children('li').not('.on-a').get();
	listitems.sort(function(a, b) {
	   return $(a).text().toUpperCase().localeCompare($(b).text().toUpperCase());
	})
	$.each(listitems, function(idx, itm) { mylist.append(itm); });

});
