$('.left-box').click(function(){
	var button_name = $(this).data('button');

	$('.ghost').removeClass('hide');
	$('.ghost').addClass('ghost-animation');
	// keyframe needs the ghost-animation to end in display none

});

$('.right-box').click(function(){
	var button_name = $(this).data('button');

	$('.ghost').removeClass('hide');
	$('.ghost').addClass('ghost-animation');
	// keyframe needs the ghost-animation to end in display none

});

$(".right-box").mouseenter(function(){
	var button_name = $(this).data('button');

	$('.red-effect').removeClass('hide');
	$('.AGHHH').removeClass('hide');

});

$(".right-box").mouseleave(function(){
	var button_name = $(this).data('button');

	$('.red-effect').addClass('hide');
	$('.AGHHH').addClass('hide');

});

$(".left-box").mouseenter(function(){
	var button_name = $(this).data('button');

	$('.no').removeClass('hide');

});

$(".left-box").mouseleave(function(){
	var button_name = $(this).data('button');

	$('.no').addClass('hide');

});

$(".around").mouseenter(function(){
	var button_name = $(this).data('button');

	$('.blackout').removeClass('hide');

});

$(".around").mouseleave(function(){
	var button_name = $(this).data('button');

	$('.blackout').addClass('hide');

});