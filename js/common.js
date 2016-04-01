new WOW().init();
Waves.attach('.btn', ['waves-button', 'waves-float']);
Waves.init();
$("#scroll-down").on('click', function(e) {
	e.preventDefault();
    $('html, body').animate({
        scrollTop: $(".competitions").offset().top
    }, 1000);
});