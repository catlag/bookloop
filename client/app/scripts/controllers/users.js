'use strict';

/**
 * @ngdoc function
 * @name fakeLunchHubApp.controller:GroupsCtrl
 * @description
 * # GroupsCtrl
 * Controller of the fakeLunchHubApp
 */
angular.module('bookloopApp')
  .controller('UsersCtrl', ['$scope', 'Users', '$http', 'lodash', function ($scope, Users, $http, lodash) {

    $scope.user = new Users();
    $scope.users = Users.query();

    $scope.createUser = function(user){
      $scope.users.push($scope.user);
      $scope.user.$save();
      $scope.user = new Users();
      console.log($scope.user)
    };

    // $scope.save = function(){
    //   $scope.user.$save();
    //   console.log($scope.user);
    //   $scope.users.push($scope.user);
    //   $scope.user = new Users();
    // };

    $scope.deleteUser = function(user){
      $scope.id = user.id;
      console.log($scope.id);
      Users.delete(user);
      // console.log(user);
      lodash.remove($scope.users, user);
    };

    // $scope.deleteUser = function(user){
    //   user.delete({id: user.id}, function(){
    //     delete $scope.users[user.id]
    //   });
    //   // $scope.users.splice(index, 1);
    //   // console.log(index);
    // };
  }]);

