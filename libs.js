$(document).ready(function (e) {
//	var itemcount = $('.item').length;
//	$('.content').prepend('<div class="colums first"></div><div class="colums second"></div><div class="colums third"></div>');
//	for(i=0;i<itemcount;i++) {
//		$('.item:eq('+i+')').attr('id', 'nom-'+i);
//	}
//	var f=0;
//	while(f<itemcount) {
//		$('.first').append($('#nom-'+f));
//		f = f+3;
//	}
//	s=1;
//	while(s<itemcount) {
//		$('.second').append($('#nom-'+s));
//		s = s+3;
//	}
//	t=2;
//	while(t<itemcount) {
//		$('.third').append($('#nom-'+t));
//		t = t+3;
//	}
//
//	var bigger = 0;
//	var biggerclass = false;
//	var littleclass = false;
//	if( $('.first').outerHeight(true) > bigger ) {
//		bigger = $('.first').outerHeight(true);
//		biggerclass = 'first';
//	}
//	if( $('.second').outerHeight(true) > bigger ) {
//		bigger = $('.second').outerHeight(true);
//		biggerclass = 'second';
//	}
//	if( $('.third').outerHeight(true) > bigger ) {
//		bigger = $('.third').outerHeight(true);
//		biggerclass = 'third';
//	}
//
//	var bigger = 9999999999;
//	if( $('.first').outerHeight(true) < bigger ) {
//		bigger = $('.first').outerHeight(true);
//		littleclass = 'first';
//	}
//	if( $('.second').outerHeight(true) < bigger ) {
//		bigger = $('.second').outerHeight(true);
//		littleclass = 'second';
//	}
//	if( $('.third').outerHeight(true) < bigger ) {
//		bigger = $('.third').outerHeight(true);
//		littleclass = 'third';
//	}
//
//	$('.'+littleclass).append($('.'+biggerclass+' .item:last'));

    $('.item').addClass('show');

    // href="#contacts"
    $('a[href="#contacts"]').click(function () {
        if( $('.contacts').hasClass('active') ) {
            $('.contacts').removeClass('active');
        } else {
            $('.contacts').addClass('active');
        }
        return false;
    });

    // tags
    $('.header .tags a, .item a.tag').click(function () {
        if( $(this).attr('href') == '#all' )
            $('.item').show();
        else {
            $('.item').hide();
            $('a.tag[href="' + $(this).attr('href') + '"]').closest('.item').show();
        }
        return false;
    });
});