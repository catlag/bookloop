'use strict';


angular.module('bookloopApp')
  .controller('UsersCtrl', ['$scope', 'Users', '$http', 'lodash', function ($scope, Users, $http, lodash) {

    $scope.user = new Users();
    $scope.users = Users.query();

    $scope.createUser = function(newUser){
      $scope.user = newUser;
      // console.log($scope.user);
      Users.save(newUser);
      $scope.users.push($scope.user);
      $scope.user = new Users();
    };

    // $scope.save = function(){
    //   $scope.user.$save();
    //   console.log($scope.user);
    //   $scope.users.push($scope.user);
    //   $scope.user = new Users();
    // };
<<<<<<< HEAD
    $scope.delete = function(user){
      $scope.id = user.id;
      console.log($scope.id);
=======

    $scope.deleteUser = function(user){
      $scope.id = user.id;
      console.log(user);
>>>>>>> f29718b171532ff83e143467878d0ea08374f2a1
      Users.delete(user);
      // console.log(user);

      lodash.remove($scope.users, user);
    };

    // $scope.deleteUser = function(user){
    //   user.delete({id: user.id}, function(){
    //     delete $scope.users(user);
    //   });
    // //   // $scope.users.splice(index, 1);
    // //   // console.log(index);
    // };
  }]);

