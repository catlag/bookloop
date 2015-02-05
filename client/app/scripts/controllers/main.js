'use strict';

/**
 * @ngdoc function
 * @name bookloopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bookloopApp
 */
angular.module('bookloopApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
