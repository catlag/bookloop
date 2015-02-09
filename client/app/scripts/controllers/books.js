'use strict';

angular.module('bookloopApp')
  .controller('BooksCtrl', ['$scope', 'Books', '$http',  function ($scope, Books, $http) {
    $scope.books = Books.query();

    // $scope.delete = function(id){
    // 	Users.delete({id:id});
    // 	// $http({
    // 	// 	url: 'https//localhost:3000/api/users',
    // 	// 	method: 'DELETE',
    // 	// 	params: id
    // 	// }).success(function(data){
    // 	// 	console.log(data);
    // 	// }); 
    // };

    // $scope.addUser = function(){
    // 	var newUser = new Users({email:$scope.newEmail, password: $scope.newPassword});
    // 	console.log(newUser);
    // 	newUser.$save();

    // };

  }]);