$(document).ready(function(){


$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

	$('.first_paralax_block_background').css({
		'transform' : 'translate(0px, -'+ wScroll/13 +'%)'
	});

	$('.first_paralax_block_text').css({
		'transform' : 'translate(0px, '+ wScroll/1.7 +'%)'
	});

	$('.second_paralax_background').css({
		'transform' : 'translate(0px, -'+ wScroll/13 +'%)'
	});






});

});