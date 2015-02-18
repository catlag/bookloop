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
  .controller('MainCtrl', ['$scope', 'Books', '$http', 'lodash', function ($scope, Books, $http, lodash) {

  	$scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
$scope.user = {};

 $scope.login = function(user){
 	$scope.user = user;
    var request = $http({
              method: 'POST',
              url: 'http://localhost:3000/api/users/login',
              // transformRequest: transformRequestAsFormPost,
              data: $.params({
                  email: this.user.email,
                  password: this.user.password
              }),
              headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          });
          // Store the data-dump of the FORM scope.
          request.success(

              function(data) {
              		// console.log('hi');
              		console.log(data);
                  // $scope.cfdump = html;

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