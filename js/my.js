$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

	$('.first_paralax_block_text').css({
		'transform' : 'translate -(0px, '+ wScroll /20 +'%)'
	});
});