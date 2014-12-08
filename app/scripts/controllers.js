/*===========================================================================
** Controllers wraps all the controllers used in the application in one 
**  place.
*===========================================================================*/
(function(angular){
  'use strict';
  var controllers = angular.module('controllers',
   ['ngAnimate',
    'ui.bootstrap',
    'footerController',
    'mainController' 
  ]);
})(angular);
