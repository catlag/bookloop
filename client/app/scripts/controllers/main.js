'use strict';

/**
 * @ngdoc function
 * @name bookloopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bookloopApp
 */
// angular.module('bookloopApp')
//   .controller('MainCtrl', function ($scope) {
//     $scope.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];
//   });



angular.module('bookloopApp')
  .controller('MainCtrl', ['$scope', 'Books', '$http', 'lodash',  function ($scope, Books, $http, lodash) {

  	$scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

// Find books by title, author, or ISBN
// Get an xml response with the most popular books for the given query. This will search all books in the title/author/ISBN fields and show matches, sorted by popularity on Goodreads. There will be cases where a result is shown on the Goodreads site, but not through the API. This happens when the result is an Amazon-only edition and we have to honor Amazon's terms of service. 
// URL: https://www.goodreads.com/search/index.xml    (sample url) 
// HTTP method: GET 
// Parameters: 
// q: The query text to match against book title, author, and ISBN fields. Supports boolean operators and phrase searching.
// page: Which page to return (default 1, optional)
// key: Developer key (required).
// search[field]: Field to search, one of 'title', 'author', or 'genre' (default is 'all')

// key: rY2wByZTY2NrSoem61slA
// secret: pw9DEHT0JVej9mi6GniLTdjuiP2mimpbusPDeVHnU

// GET https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=newest&key=yourAPIKey

    // AIzaSyAUGRj4KWtNKx9Jg50n-5wKzYG_CiUTAPs

  	$scope.search = function(book){
  		$http.get('https://www.googleapis.com/books/v1/volumes?q='+book+'&key=AIzaSyAUGRj4KWtNKx9Jg50n-5wKzYG_CiUTAPs').
  		success(function(data, status, headers, config){
  			console.log(data);
  		}).
  		error(function(data, status, headers, config){
  			console.log(status)
  		})
  	};

 }]);