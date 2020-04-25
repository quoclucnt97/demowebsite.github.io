$(function() {
	$('.menu li:first-child a').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html, body').animate({scrollTop: $('.noidung').offset().top}, 1000);
	});

	$('.menu li:nth-child(2) a').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html, body').animate({scrollTop: $('.team').offset().top}, 1000);
	});

	$('.menu li:nth-child(3) a').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html, body').animate({scrollTop: $('.port').offset().top}, 1000);
	});

	$('.menu li:nth-child(4) a').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html, body').animate({scrollTop: $('.contact').offset().top}, 1000);
	});

	$('.back').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html, body').animate({scrollTop: 0}, 1000);
	});

	$('.menutop h3').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html, body').animate({scrollTop: 0}, 1000);
	});

	var trangthai = 'duoi';

	window.addEventListener('scroll', function(){
		if(window.pageYOffset > 1){
			if(trangthai = 'duoi'){
				trangthai = 'tren';
				$('.menutop').addClass('color');
				$('.back').addClass('opa');
			}
		}
		else{
			if(trangthai = 'tren'){
				trangthai = 'duoi';
				$('.menutop').removeClass('color');
				$('.back').removeClass('opa');
			}
		}
	})
	
});