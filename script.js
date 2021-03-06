'use strict';

var controller = (function($) {
	
	$(function() {
		
		var $latitude          = $('#latitude'),
		    $longitude         = $('#longitude'),
		    $getLocationButton = $('#getLocationButton');
		
		$getLocationButton.on('click', function() {
			
			$latitude.val(0);
			$longitude.val(0);
			
			if(navigator.geolocation)
			{
				navigator.geolocation.getCurrentPosition(function(position) {			
					$latitude.val(position.coords.latitude);
					$longitude.val(position.coords.longitude);
				});
			}
			else
			{
				console.log('Geolocation is not supported by this browser.');
			}
			
		});
		
		
	});
	
})(jQuery);
