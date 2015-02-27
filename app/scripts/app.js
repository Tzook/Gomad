/*===========================================================================
** Main module of the project.
** Includes the directives and the config.
*===========================================================================*/
(function(angular){
	console.log("	╭━━╮╭━━━┳━━━┳━━━╮");
	console.log("	┃╭╮┃┃╭━╮┃╭━╮┃╭━╮┃");
	console.log("	┃╰╯╰┫┃┃┃┃╰━━┫╰━━╮");
	console.log("	┃╭━╮┃┃┃┃┣━━╮┣━━╮┃");
	console.log("	┃╰━╯┃╰━╯┃╰━╯┃╰━╯┃");
	console.log("	╰━━━┻━━━┻━━━┻━━━╯");

	'use strict';
	var myApp = angular.module('myApp', [
		'ngRoute',
		'controllers'
	])
	.directive('footer', function () { // replaces the normal <footer> element
	    return {
	    	restrict: 'E',
		    templateUrl: 'partials/footer.html',
		    controller: 'FooterController'
	    };
	})
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'partials/main.html',
			controller: 'MainController'
		})
		.otherwise({
			redirectTo: '/'
		});
	}]);
})(angular);