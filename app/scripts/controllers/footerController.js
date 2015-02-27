/* ==========================================================================
** Footer Controller is the controller used in the <Footer> element.
** It is used for displaying the info about the developers, using a tooltip.
   =========================================================================*/
(function(angular){
	'use strict';
	angular.module('footerController', [])
	.controller('FooterController', ['$scope', function($scope) {
		/* info about the developers */
		$scope.about = '<p>Created by:<br>'
					 + '<a target="_blank" href="https://www.linkedin.com/pub/tzook-shaked/a4/230/6a0">Tzook</a>'
					 + ' & <a target="_blank" href="https://www.linkedin.com/pub/noam-elboim/a6/372/a">Noam</a><br>'
					 + '<a target="_blank" href="mailto:tzook10@gmail.com">tzook10@gmail.com</a><br>'
					 + '<a target="_blank" href="mailto:noam@mail.com">noam@mail.com</a><br>'
					 + '<a target="_blank" href="https://github.com/Tzook/Gomad">Source</a><br>'
					 + 'Music by:<br><a target="_blank" href="mailto:guyguyguy65@mail.com">Guy Benami</a></p>';
	}]);
})(angular);