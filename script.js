'use strict';

var controller = (function($) {
	
	$(function() {
		
		var $latitude          = $('#latitude'),
		    $longitude         = $('#longitude'),
			$getLocationButton = $('#getLocationButton');
		
		$getLocationButton.on('click', function() {
			
			function showPosition(position) {
				
				$latitude.val(position.coords.latitude);
				$longitude.val(position.coords.longitude);
				
			}
			
			if(navigator.geolocation)
			{
				navigator.geolocation.getCurrentPosition(showPosition);
			}
			else
			{
				console.log('Geolocation is not supported by this browser.');
			}
			
		});
		
		
	});
	
})(jQuery);
