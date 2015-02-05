'use strict';

/**
 * @ngdoc function
 * @name bookloopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bookloopApp
 */
angular.module('bookloopApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
