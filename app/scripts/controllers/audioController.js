/* ==========================================================================
** Audio Controller plays the music on the website.
** Enables tuning on/off upon clicking on the audio icon.
** Some phones disable audio autoplay,
**  thus the audio can also begins upon a click.
*===========================================================================*/
(function(angular){
	'use strict';
	angular.module('audioController', [])
	.controller('AudioController', ['$scope', '$window', function($scope, $window) {
		$scope.phonePlay = false;
		$scope.isBig = false;
		$scope.audio = new Audio('audio/hava.mp3');
		$scope.audio.loop = true;	// play in loops
		$scope.audio.play(); 		// play automatically

		/* decides if it is a computer or not */
		$window.onload = function(){
			$scope.isBig = ($window.innerWidth > 850);
		};

		/* mutes or un-mutes the audio */
		$scope.toggleAudio = function() {
			$scope.phonePlay = true;
			if ($scope.audio.paused)
				$scope.audio.play();
			else $scope.audio.pause();
		};

		/* some phones don't play sound automatically.
		   this enables the sound upon click. */
		$scope.phoneStartPlaying = function() {
			if ($scope.phonePlay)
				return;
			$scope.audio.play(); 
			$scope.phonePlay = true;
		};

	}]);
})(angular);