console.log('howdy');

$(document).ready(function(){



	$("#barkmode").click(function(){
		$('body').addClass('darkmode');
	});

	$('#roogmode').click(function(){
		$('body').removeClass('darkmode');
	});

});
