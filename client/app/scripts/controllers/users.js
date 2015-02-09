'use strict';
 
/**
 * @ngdoc function
 * @name fakeLunchHubApp.controller:GroupsCtrl
 * @description
 * # GroupsCtrl
 * Controller of the fakeLunchHubApp
 */
angular.module('bookloopApp')
  .controller('UsersCtrl', ['$scope', 'Users', '$http',  function ($scope, Users, $http) {
    $scope.users = Users.query();

  }]);