'use strict';

angular.module('bookloopApp')
  .controller('BooksCtrl', ['$scope', 'Books', '$http', 'lodash',  function ($scope, Books, $http, lodash) {


  	$scope.book = new Books();
  	$scope.books = Books.query();

  	$scope.update = function(book){
  		$scope.book = book.title;
  		console.log($scope.book)
  		$scope.book.$save(book);
  		console.log($scope.book);
  		$scope.books.push($scope.book);
  		$scope.book = new Books();
  	};

  	$scope.delete = function(book){
  		$scope.id = book.id;
  		console.log($scope.id);
  		Books.delete(book);
  		// console.log(book);
  		lodash.remove($scope.books, book);
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