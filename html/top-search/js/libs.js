// Контент по центру мать его
function con_middle ()
{
    con_width = +$('.widget-list').outerWidth(true);
    block_width = +$('.widget:first').outerWidth(true);
    block_count = Math.floor(con_width/block_width);
    con_margin = Math.floor((con_width-block_count*block_width)/2);
    
    $('#center-content').css('margin-left', con_margin+'px');;
}
con_middle();

// При изменении размера окна
$( window ).resize(function() {
    con_middle();		
});

// Смена поиска
$(document).ready(function () {
	$(".search-switcher").hover(
		function () {
			$(".hide-search").show();
	}, function () {
			$(".hide-search").hide();
	}
	);
	$(".search-switcher li").on('click', function() {
		if( $(this).hasClass("hide-search") ) {
			$(".search-switcher li").addClass("hide-search");
			$(this).removeClass("hide-search");
		}
	});

//Выпадающее меню
	$(".theme-position li").click(function() {
		$(".first-slide").css("background-image", "url("+$(this).data("bg")+")");
	});
	$(".theme a").click(function(){
		$(".theme-position ul").toggle("fast");
		$(".close-window").toggle("fast");
		return false;
	});
	$(".close-window").click(function(){
		$(".theme-position ul").toggle("fast");
		$(".close-window").toggle("fast");
		return false;
	});
});