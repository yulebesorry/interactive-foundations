console.log('howdy');

$(document).ready(function(){


	//------------------------------------
	// adds a a darkmode class to the body
	//------------------------------------
	$("#darkmode").click(function(){
		// console.log('darkmode button clicked');
		$('body').toggleClass('darkmode');
	});

});
