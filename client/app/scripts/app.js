'use strict';
/* global app:true */
/* exported app */
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
    'ngTouch',
    'ngLodash'
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
    var Book = $resource('http://localhost:3000/api/books', {book: '@book'}, {
      update: {
        method: 'POST',
        url: 'http://localhost:3000/api/books',
        // params: {title: book.title},
        transformRequest: [],
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      },
      delete: {
        method: 'DELETE',
        url: 'http://localhost:3000/api/books/:id.json',
        id: '@book.id',
        transformRequest: [],
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }
    });
    return Book;
  }];
});

app.provider('Users', function(){
  this.$get = ['$resource', function($resource){
    var User = $resource('http://localhost:3000/api/users', {user: '@user'}, {

      update: {
        method: 'POST',
        url: 'http://localhost:3000/api/users',
        // params: {title: user.title},
        transformRequest: [],
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      },
      delete: {
        method: 'DELETE',
        url: 'http://localhost:3000/api/users/:id',
        id: '@user.id',
        transformRequest: [],
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }
    });
    return User;
  }];
});





