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
  .controller('MainCtrl', ['$scope', 'Books', '$http', 'lodash', 'transformRequestAsFormPost', function ($scope, Books, $http, lodash, transformRequestAsFormPost) {

  	$scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

 $scope.login = function(user){
 	console.log(user);
 	console.log(user.email);
 	console.log(user.password);
 	$scope.cfdump = '';
    var request = $http({
              method: "POST",
              url: "https://localhost:3000/users/login",
              transformRequest: transformRequestAsFormPost,
              data: {
                  email: user.email,
                  password: user.password
              }
          });
          // Store the data-dump of the FORM scope.
          request.success(
              function( html ) {

                  $scope.cfdump = html;

              }
          );
 };  






// GET https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=newest&key=yourAPIKey

// AIzaSyAUGRj4KWtNKx9Jg50n-5wKzYG_CiUTAPs

  	// $scope.search = function(book){
  	// 	$http.get('https://www.googleapis.com/books/v1/volumes?q='+book+'&key=AIzaSyAUGRj4KWtNKx9Jg50n-5wKzYG_CiUTAPs').
  	// 	success(function(data, status, headers, config){
  	// 		// console.log(data.items);
  	// 		for (var i = data.items.length - 1; i >= 0; i--) {
  	// 			console.log(data.items[i].volumeInfo)
  	// 		};
  	// 	}).
  	// 	error(function(data, status, headers, config){
  	// 		console.log(status);
  	// 	})
  	// };

 }]);