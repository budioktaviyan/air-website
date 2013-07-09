// Search Clearance
function defaultInput(target){
	if((target).value == 'Search'){(target).value='';}
}

function clearInput(target){
	if((target).value == ''){(target).value='Search';}
}

//Banner Style
$(document).ready(function(){

	// Wrap image with <span class="image-wrap"> for styling
	$('#banner img').each(function() {
		var imgClass = $(this).attr('class');
		$(this).wrap('<span class="image-wrap ' + imgClass + '" style="width: auto; height: auto;"/>');
		$(this).removeAttr('class');
	});
});