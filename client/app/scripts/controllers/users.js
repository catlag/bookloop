'use strict';


angular.module('bookloopApp')
  .controller('UsersCtrl', ['$scope', 'Users', 'lodash', function ($scope, Users, lodash) {

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

    $scope.deleteUser = function(user){
      $scope.id = user.id;
      console.log(user);
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

