// JavaScript Document
$(document).ready(function(e) {
	$("#button-r").click(function(){
		$('.shtorka').hide();
		$('.vis1').addClass('vis1_1');
		$('.vis2').addClass('vis2_1');
		$('.vis3').addClass('vis3_1');
		$('.vis4').addClass('vis4_1');
		$('.vis5').addClass('vis5_1');
		$('.vis1_1').animate({
			width: "450",
			marginLeft: "130px",
			marginTop: "15px"
		}, 1000);
		$('.vis1').css('z-index', '9');
		$('.vis2').css('z-index', '10');
		$('.vis3').css('z-index', '9');
		$('.vis4').css('z-index', '8');
		$('.vis5').css('z-index', '8');
		
		$('.vis2_1').animate({
			width: "500",
			marginLeft: "230px",
			marginTop: "0px"
			
		}, 1000);
		$('.vis3_1').animate({
			width: "450",
			marginLeft: "400px",
			marginTop: "15px"
		}, 1000);
		$('.vis4_1').animate({
			width: "400",
			marginLeft: "510px",
			marginTop: "30px"
		}, 1000);
		$('.vis5_1').animate({
			width: "400",
			marginLeft: "60px",
			marginTop: "30px"
		}, 1000, function(){
			$('.vis1_1').removeClass('vis1');
			$('.vis1_1').addClass('vis2');
			$('.vis1_1').removeClass('vis1_1');
			
			$('.vis2_1').removeClass('vis2');
			$('.vis2_1').addClass('vis3');
			$('.vis2_1').removeClass('vis2_1');
			
			$('.vis3_1').removeClass('vis3');
			$('.vis3_1').addClass('vis4');
			$('.vis3_1').removeClass('vis3_1');
			
			$('.vis4_1').removeClass('vis4');
			$('.vis4_1').addClass('vis5');
			$('.vis4_1').removeClass('vis4_1');
			
			$('.vis5_1').removeClass('vis5');
			$('.vis5_1').addClass('vis1');
			$('.vis5_1').removeClass('vis5_1');
			$('.vis3 .shtorka').show();
			$('.vis1').css('z-index', '8');
			$('.vis2').css('z-index', '9');
			$('.vis3').css('z-index', '10');
			$('.vis4').css('z-index', '9');
			$('.vis5').css('z-index', '8');
		});
		
		return false;
	});



	
	$("#button-l").click(function(){
		$('.shtorka').hide();
		$('.vis1').addClass('vis1_1');
		$('.vis2').addClass('vis2_1');
		$('.vis3').addClass('vis3_1');
		$('.vis4').addClass('vis4_1');
		$('.vis5').addClass('vis5_1');
		
		$('.vis1').css('z-index', '8');
		$('.vis2').css('z-index', '8');
		$('.vis3').css('z-index', '9');
		$('.vis4').css('z-index', '10');
		$('.vis5').css('z-index', '9');
		
		$('.vis3_1').animate({
			width: "450",
			marginLeft: "130px",
			marginTop: "15px"
		}, 1000);
		
		$('.vis4_1').animate({
			width: "500",
			marginLeft: "250px",
			marginTop: "0px"
			
		}, 1000);
		$('.vis5_1').animate({
			width: "450",
			marginLeft: "400px",
			marginTop: "15px"
		}, 1000);
		$('.vis1_1').animate({
			width: "400",
			marginLeft: "510px",
			marginTop: "30px"
		}, 1000);
		$('.vis2_1').animate({
			width: "400",
			marginLeft: "60px",
			marginTop: "30px"
		}, 1000, function(){
				
			$('.vis1_1').removeClass('vis1');
			$('.vis1_1').addClass('vis5');
			$('.vis1_1').removeClass('vis1_1');
			
			$('.vis2_1').removeClass('vis2');
			$('.vis2_1').addClass('vis1');
			$('.vis2_1').removeClass('vis2_1');
			
			$('.vis3_1').removeClass('vis3');
			$('.vis3_1').addClass('vis2');
			$('.vis3_1').removeClass('vis3_1');
			
			$('.vis4_1').removeClass('vis4');
			$('.vis4_1').addClass('vis3');
			$('.vis4_1').removeClass('vis4_1');
			
			$('.vis5_1').removeClass('vis5');
			$('.vis5_1').addClass('vis4');
			$('.vis5_1').removeClass('vis5_1');
			
			$('.vis3 .shtorka').show();
			$('.vis1').css('z-index', '8');
			$('.vis2').css('z-index', '9');
			$('.vis3').css('z-index', '10');
			$('.vis4').css('z-index', '9');
			$('.vis5').css('z-index', '8');
			
		});
		return false;
	});
	
	$('.shtorka').click(function(){
		if($(this).parent('div').children('a').attr('href')) window.location = $(this).parent('div').children('a').attr('href');
	});
	
}); 