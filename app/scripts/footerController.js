/* ==========================================================================
** Footer Controller is the controller used in the <Footer> element.
** It is used for:
**		1. Manipulating the Audio.
**		2. Displaying the info about the developers, using a tooltip.
   =========================================================================*/
(function(angular){
	'use strict';
	angular.module('footerController', [])
	.controller('FooterController', ['$scope', function($scope) {
		
		$scope.audio = new Audio('audio/hava.mp3');
		$scope.audio.loop = true;	// play in loops
		$scope.audio.play(); 		// play automatically

		/* mutes or un-mutes the audio */
		$scope.toggleAudio = function() {
			$scope.audio.muted = !$scope.audio.muted;
		};

		/* info about the developers */
		$scope.about = '<p>Created by:<br>'
					 + '<a target="_blank" href="https://www.linkedin.com/pub/tzook-shaked/a4/230/6a0">Tzook</a>'
					 + ' & <a target="_blank" href="https://www.linkedin.com/pub/noam-elboim/a6/372/a">Noam</a><br>'
					 + '<a target="_blank" href="mailto:tzook10@gmail.com">tzook10@gmail.com</a><br>'
					 + '<a target="_blank" href="mailto:noam@mail.com">noam@mail.com</a><br>'
					 + '<a target="_blank" href="">Source</a></p>';
	}]);
})(angular);
