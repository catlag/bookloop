'use strict';

angular.module('bookloopApp')
  .controller('BooksCtrl', ['$scope', 'Books', '$http',  function ($scope, Books, $http) {

  	$scope.book = new Books();
  	$scope.books = Books.query();

  	$scope.save = function(){
  		$scope.book.$save();
  		$scope.books.push($scope.book);
  		$scope.book = new Books();
  	};

  	$scope.delete = function(book){
  		Book.delete(book);
  		_.remove($scope.book, book);
  	};

    // $scope.books = Books.query();

    // // $scope.delete = function(id){
    // // 	Users.delete({id:id});
    // // 	// $http({
    // // 	// 	url: 'https//localhost:3000/api/users',
    // // 	// 	method: 'DELETE',
    // // 	// 	params: id
    // // 	// }).success(function(data){
    // // 	// 	console.log(data);
    // // 	// }); 
    // // };

    // $scope.addBook = function(){
    // 	var newBook = new Books({title:$scope.newTitle, author: $scope.newAuthor, year:$scope.newYear, ISBN:$scope.ISBN});
    // 	console.log(newBook);
    // 	newBook.$save();

    // };

  }]);