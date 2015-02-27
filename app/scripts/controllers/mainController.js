/*===========================================================================
** MainController is responsible for displaying the games on the screen.
** It works as follows:
**		1. get the games data (img and url) from a JSON file.
**		2. once you get the games, start summoning the games one by one,
**			using the array length to know how long between summons.
*===========================================================================*/
(function(angular){
	'use strict';
	angular.module('mainController', [])
	.controller('MainController', ['$scope', '$timeout', '$interval', '$http', '$window', function ($scope, $timeout, $interval, $http, $window) {
		var radius = 150,	// the distance of each image from center
			imageSize = 50, // size of each image
			rotateTime = 14; // time of each circle. only needed to change here.
		// style is applied directly on the rotating games, in order to be able to change cycle time only here in the code
		$scope.rotateStyle = {'-webkit-animation-duration': rotateTime + 's',
									 'animation-duration': rotateTime + 's'};
		$scope.games = []; // initialize games 

		/* get games from a JSON file, and once it's up, start summoning the games */
		$http.get('games.json').success(function(data) {
			$scope.games = data;
			var angle = parseInt(360 / $scope.games.length, 10);
			angular.forEach($scope.games, function(game, loc) { // game = one game object, loaction = its location
				/* calculate x and y for each game dynamically, according to the length of the array */
				game.x = radius * Math.cos(angle * loc * Math.PI / 180) + radius - imageSize / 2 + 'px';
				game.y = radius * Math.sin(angle * loc * Math.PI / 180) + radius - imageSize / 2 + 'px';
				/* shows all games, in intervals of the same time */
				$timeout(function() {
					game.show = true; // default is undefined, which acts like false
				}, (loc + 1) * rotateTime * 1000 / $scope.games.length); 
			});
		});
	}]);
})(angular);