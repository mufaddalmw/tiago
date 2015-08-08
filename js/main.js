$(function(){
	//==================Global variable==================
	$winHeight = $(window).height();
	
	//==================Menu "active" class toggle==================
	$('a.menu').click(function() {
	   $(this).toggleClass('active');
	   $('#main-nav').fadeToggle(300);
	});
	
	//Assign window height to container for first screen
	$('.section > .container').css({'min-height':$winHeight});
	
	//Initialize Smooth scrolling
	  $('#fullpage').fullpage({
		  scrollOverflow: true,
		  navigation: true,
		  anchors:['home', 'about', 'work', 'contact']
	  });
	
});

$(window).load(function(){
	$('.loader-screen').slideUp(function(){
		$( ".loader-screen" ).remove();
	});
	
	
});