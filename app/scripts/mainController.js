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
	.controller('MainController', ['$scope', '$timeout', '$http', function ($scope, $timeout, $http) {
		$scope.rotateTime = 10; // time of each circle. only needed to change here.
		// style is applied directly on the rotating games, in order to be able to change cycle time only here in the code
		$scope.rotateStyle = {'-webkit-animation-duration': $scope.rotateTime + 's',
								'-moz-animation-duration': $scope.rotateTime + 's',
								  '-o-animation-duration': $scope.rotateTime + 's',
									 'animation-duration': $scope.rotateTime + 's'};
		$scope.games = []; // initialize games 

		/* summons all games in the same place, but with a delay for each game.
			this causes the games to be in exact distances in the cycle */
		$scope.summonGames = function() {
			angular.forEach($scope.games, function(game, location) { // game = one game object, loaction = its location
				$timeout(function() {
					game.show = true; // default is undefined, which acts like false
				}, (location + 1) * $scope.rotateTime * 1000 / $scope.games.length); 
				// i.e. if time=12 and games=6, first summon will be 1*(12*1000/6)=1*2000=2s,
				//	second summon will be 2*2000=4s, and so on
			});			
		};

		/* get games from a JSON file, and once it's up, start summoning the games */
		$http.get('games.json').success(function(data){
			$scope.games = data;
			$scope.summonGames();
		});
	}]);
})(angular);
