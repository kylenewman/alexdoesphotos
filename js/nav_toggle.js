jQuery(document).ready(function() {

	jQuery("#navIcon").click(function() {

		jQuery(".navToggle").slideToggle(400, function() {
			jQuery(this).toggleClass("navExpanded").css('display', '');
		}); 
			
	})

});