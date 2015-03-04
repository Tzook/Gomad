/* ==========================================================================
** Footer Controller is the controller used in the <Footer> element.
** It is used for displaying the info about the developers, using a tooltip.
   =========================================================================*/
(function(angular){
	'use strict';
	angular.module('footerController', [])
	.controller('FooterController', ['$scope', function($scope) {
		/* info about the developers */
		$scope.about = '<p>Web created by:<br>'
					 + '<a target="_blank" href="https://www.linkedin.com/pub/tzook-shaked/a4/230/6a0">Tzook</a>'
					 + ' & <a target="_blank" href="https://www.linkedin.com/pub/noam-elboim/a6/372/a">Noam</a><br>'
					 + '<a target="_blank" href="https://github.com/Tzook/Gomad">Source</a><br>'
					 + 'Games created by:<br><a target="_blank" href="mailto:benk0913@gmail.com">Ben Rokah</a><br>'
					 + 'Music by:<br><a target="_blank" href="mailto:guyguyguy65g@mail.com">Guy Benami</a></p>';
	}]);
})(angular);