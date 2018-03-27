$( document ).ready(function() {
	
	$('.wrapper').click(function(){
		var button_name = $(this).data('button');

		var $ghost = $('.ghost');
		var $ghost2 = $('.ghost2');
		var $newmenu = $('.newmenu');
		var $oldmenu = $('.oldmenu');

		$ghost.removeClass('hide');
		$ghost.addClass('ghost-animation');
		$ghost2.addClass('ghost-animation2');

		setTimeout(function(){ 
			$ghost.addClass('hide'); 
 
		    $oldmenu.addClass('hide'); 

		}, 5000);

		setTimeout(function(){ 

		    $newmenu.removeClass('hide'); 
		    $oldmenu.addClass('opacity'); 
		    $ghost2.removeClass('hide'); 
		    // switch the old menu to new menu in b/w gitching, the opacity is there first 
		    // for the glitching effect to finish

		}, 3000);

		setTimeout(function(){ 



		}, 3000);

		setTimeout(function(){ 

		    $ghost2.addClass('hide'); 

		}, 6000);

		// keyframe needs the ghost-animation to end in display none

	});

	$(".red").mouseenter(function(){
		var button_name = $(this).data('button');

		$('.red-effect').removeClass('hide');
		$('.AGHHH').removeClass('hide');


	});

	$(".right-box").mouseleave(function(){
		var button_name = $(this).data('button');

		$('.red-effect').addClass('hide');
		$('.AGHHH').addClass('hide');

	});

	// $(".paranoia").mouseenter(function(){
	// 	var button_name = $(this).data('button');

	// 	$('.scream').removeClass('hide');
	// });

	// $(".paranoia").mouseleave(function(){
	// 	var button_name = $(this).data('button');

	// 	$('.scream').addClass('hide');
	// });

	$(".no").mouseenter(function(){
		var button_name = $(this).data('button');

		$('.no-effect').removeClass('hide');
	});

	$(".no").mouseleave(function(){
		var button_name = $(this).data('button');

		$('.no-effect').addClass('hide');
	});

	$(".igotyou").mouseenter(function(){
		var button_name = $(this).data('button');

		$('.igotyou-background').removeClass('hide');
		$('.igotyou-effect').removeClass('hide');

	});

	$(".igotyou").mouseleave(function(){
		var button_name = $(this).data('button');

		$('.igotyou-background').addClass('hide');
		$('.igotyou-effect').addClass('hide');

	});

	$(".typewriter").mouseenter(function(){
		var button_name = $(this).data('button');

		$('.typewriter-background').removeClass('hide');
		$('.typewriter-effect').removeClass('hide');

	});

	$(".typewriter").mouseleave(function(){
		var button_name = $(this).data('button');

		$('.typewriter-background').addClass('hide');
		$('.typewriter-effect').addClass('hide');

	});

	$('.depression').mouseenter(function(){
		var button_name = $(this).data('button');

		var $D1 = $('.D1');
		var $D2 = $('.D2');
		var $D3 = $('.D3');

		$D1.removeClass('hide');
		$('.depression-background').removeClass('hide')

		setTimeout(function(){ 
			$D1.addClass('hide'); 
		    $D2.removeClass('hide'); 

		}, 400);
		setTimeout(function(){ 
			$D2.addClass('hide'); 
		    $D3.removeClass('hide');
			
		}, 800);
		setTimeout(function(){ 
			$D3.addClass('hide'); 
		    $D1.removeClass('hide');
			
		}, 1200);

		setTimeout(function(){ 
			$D1.addClass('hide'); 
		    $D2.removeClass('hide'); 

		}, 1600);
		setTimeout(function(){ 
			$D2.addClass('hide'); 
		    $D3.removeClass('hide');
			
		}, 2000);
		setTimeout(function(){ 
			$D3.addClass('hide'); 
		    $D1.removeClass('hide');

		}, 2400);

		setTimeout(function(){ 
			$D1.addClass('hide'); 
		    $D2.removeClass('hide'); 

		}, 2800);
		setTimeout(function(){ 
			$D2.addClass('hide'); 
		    $D3.removeClass('hide');
			
		}, 3200);
		setTimeout(function(){ 
			$D3.addClass('hide'); 
		    $D1.removeClass('hide');

		}, 3600);


			setTimeout(function(){ 
			$D1.addClass('hide'); 
		}, 4000);
	});

	$('.depression').mouseleave(function(){
		var button_name = $(this).data('button');

		$('.depression-background').addClass('hide')

	});

	$(".bed").mouseenter(function(){
		var button_name = $(this).data('button');

		$('.bed-background').removeClass('hide');
		$('.bed-effect').removeClass('hide');

	});

	$(".bed").mouseleave(function(){
		var button_name = $(this).data('button');

		$('.bed-background').addClass('hide');
		$('.bed-effect').addClass('hide');

	});

	$('.sadness').mouseenter(function(){
		var button_name = $(this).data('button');

		var $S1 = $('.S1');
		var $S2 = $('.S2');
		var $S3 = $('.S3');
		var $S4 = $('.S4');

		$S1.removeClass('hide');
		$('.sadness-background').removeClass('hide')

		setTimeout(function(){ 
			$S1.addClass('hide'); 
		    $S2.removeClass('hide'); 

		}, 3000);
		setTimeout(function(){ 
			$S2.addClass('hide'); 
		    $S3.removeClass('hide');
			
		}, 6000);
		setTimeout(function(){ 
			$S3.addClass('hide'); 
		    $S4.removeClass('hide');
			
		}, 9000);

		setTimeout(function(){ 
			$S4.addClass('hide'); 
		    $S1.removeClass('hide'); 

		}, 12000);

		setTimeout(function(){ 
			$S1.addClass('hide'); 
		    $S2.removeClass('hide'); 

		}, 15000);
		setTimeout(function(){ 
			$S2.addClass('hide'); 
		    $S3.removeClass('hide');
			
		}, 18000);
		setTimeout(function(){ 
			$S3.addClass('hide'); 
		    $S4.removeClass('hide');
			
		}, 21000);

			setTimeout(function(){ 
			$S4.addClass('hide'); 
		}, 24000);
	});

	$('.sadness').mouseleave(function(){
		var button_name = $(this).data('button');

		$('.sadness-background').addClass('hide')

	});
		
	$(".around").mouseenter(function(){
		var button_name = $(this).data('button');

		$('.blackout').removeClass('hide');

	});

	$(".around").mouseleave(function(){
		var button_name = $(this).data('button');

		$('.blackout').addClass('hide');

	});


	$('.joy').click(function(){
		var button_name = $(this).data('button');

	    var $I1_1 = $('.inspiration1-1');
		var $I1_2 = $('.inspiration1-2');
		var $I1_3 = $('.inspiration1-3');


		$I1_1.removeClass('hide');
		$('.inspiration-background').removeClass('hide')

		setTimeout(function(){ 
			$I1_1.addClass('hide'); 
		    $I1_2.removeClass('hide'); 

		}, 4500);
		setTimeout(function(){ 
			$I1_2.addClass('hide'); 
		    $I1_3.removeClass('hide');
			
		}, 9000);
		setTimeout(function(){ 
			$I1_3.addClass('hide'); 
			
		}, 13500);

		setTimeout(function(){ 
			$('.inspiration-background').addClass('hide')

		}, 14200);

 		setTimeout(function(){ 
			$('.erase-oval3').removeClass('hide')
			$('.invisible-oval3').addClass('invisible-top-layer-erase')			
			$('.invisible-top-layer-erase-wrapper').removeClass('hide')

		}, 5000);

	});





	// $('.someclass').click(function(){
		var classToAdd = ['animation1','animation2', 'animation3', 'animation4'];
		var randNum =  Math.floor(Math.random() * 4);
		$('body').addClass(classToAdd[randNum]);

	// });
});	