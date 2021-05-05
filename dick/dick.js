console.log('howdy');

$(document).ready(function(){


	//------------------------------------
	// adds a a darkmode class to the body
	//------------------------------------
	$("#barkmode").click(function(){
		// console.log('darkmode button clicked');
		$('body').addClass('darkmode');
	});

	$('#roogmode').click(function(){
		$('body').removeClass('darkmode');
	});

});
