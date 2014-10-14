
$(document).on('ready', function(){

	$('#menu a').on('click', function(){
		var seccion = $(this).attr('href');
	$('body, html').animate({
		scrollTop: $(seccion).offset().top-130
	}, 800);
	
	return false;
	});
	console.log('Hola');
});