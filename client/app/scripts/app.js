'use strict';

/**
 * @ngdoc overview
 * @name bookloopApp
 * @description
 * # bookloopApp
 *
 * Main module of the application.
 */
var app = angular.module('bookloopApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

 app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl'
      })
      .when('/books', {
        templateUrl: 'views/books.html',
        controller: 'BooksCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

app.factory('Users', ['$resource', function($resource) {
  return $resource('http://localhost\\:3000/api/users', null, {
    'update': { method:'PUT' },
    'post': { method: 'POST', url: 'http://localhost\\:3000/api/users/signup' }
  });

}]);

// app.factory('Books', ['$resource', function($resource) {
//   // return $resource('http://localhost\\:3000/api/books', null, {
//   //   'update': { method:'PUT' },
//   //   'post': { method: 'POST', url: 'http://localhost\\:3000/api/books' }
//   //   // 'action': { method: 'PUT', url: 'http://localhost\\:3000/api/users/:id/action'}
//   // });
// }]);

app.provider('Books', function(){
  this.$get = ['$resource', function($resource){
    var Book = $resource('http://localhost:3000/api/books', {}, {
      update: {
        method: 'POST'
      }
    });
    return Book;
  }];
});





