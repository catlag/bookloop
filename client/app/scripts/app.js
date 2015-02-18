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
      .when('/user/signup', {
        templateUrl: 'views/signup.html',
        controller: 'UsersCtrl'
      })
      .when('/user/login', {
        templateUrl: 'views/attempt_login.html',
        controller: 'UsersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

// app.factory('Users', function($resource) {
//   return $resource('/api/users/:id', { id: '@user.id' },
//   {
//     'create': {method: 'POST'},
//     'index': {method: 'GET'},
//     'show': { method: 'GET'},
//     'update': { method:'PUT' },
//     'destroy': {method: 'DELETE'}
//   });
// });

// app.factory('Books', ['$resource', function($resource) {
//   // return $resource('http://localhost\\:3000/api/books', null, {
//   //   'update': { method:'PUT' },
//   //   'post': { method: 'POST', url: 'http://localhost\\:3000/api/books' }
//   //   // 'action': { method: 'PUT', url: 'http://localhost\\:3000/api/users/:id/action'}
//   // });
// }]);

app.provider('Books', function(){
  this.$get = ['$resource', function($resource){
    var Book = {};
    Book = $resource('/api/books', null, {
      update: {
        method: 'POST',
        url: '/api/books',
        params: {book: '@book'},
        transformRequest: [],
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      },
      delete: {
        method: 'DELETE',
        url: '/api/books/:id.json',
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
    var User = $resource('/api/users', null, {
      create: {
        method: 'POST',
        url: '/api/users',
        params: {user: '@user'},
        transformRequest: [],
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      },
      delete: {
        method: 'DELETE',
        id: '@user.id',
        url: '/api/users/:id.json',
        transformRequest: [],
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }
    });
    return User;

  }];
});



        // I provide a request-transformation method that is used to prepare the outgoing
        // request as a FORM post instead of a JSON packet.
// app.factory(
//     'transformRequestAsFormPost',
//     function() {

//         // I prepare the request data for the form post.
//         function transformRequest( data, getHeaders ) {

//             var headers = getHeaders();

//             headers[ 'Content-type' ] = 'application/x-www-form-urlencoded; charset=utf-8';

//             return( serializeData( data ) );

//         }


//         // Return the factory value.
//         return( transformRequest );


//         // ---
//         // PRVIATE METHODS.
//         // ---


//         // I serialize the given Object into a key-value pair string. This
//         // method expects an object and will default to the toString() method.
//         // --
//         // NOTE: This is an atered version of the jQuery.param() method which
//         // will serialize a data collection for Form posting.
//         // --
//         // https://github.com/jquery/jquery/blob/master/src/serialize.js#L45
//         function serializeData( data ) {

//             // If this is not an object, defer to native stringification.
//             if ( ! angular.isObject( data ) ) {

//                 return( ( data === null ) ? '' : data.toString() );

//             }

//             var buffer = [];

//             // Serialize each key in the object.
//             for ( var name in data ) {

//                 if ( ! data.hasOwnProperty( name ) ) {

//                     continue;

//                 }

//                 var value = data[ name ];

//                 buffer.push(
//                     encodeURIComponent( name ) +
//                     '=' +
//                     encodeURIComponent( ( value == null ) ? '' : value )
//                 );

//             }

//             // Serialize the buffer and clean it up for transportation.
//             var source = buffer
//                 .join( '&' )
//                 .replace( /%20/g, '+' )
//             ;

//             return( source );

//         }

//     }
// );




// app.provider('Users', function(){
//   this.$get = ['$resource', function($resource){
//     var User = $resource('http://localhost:3000/api/users', null, {
//       update: {
//         method: 'POST',
//         url: 'http://localhost:3000/api/users/',
//         // params: {title: user.title},
//         transformRequest: [],
//         headers: {'Content-Type': 'application/x-www-form-urlencoded'}
//       },
//       delete: {
//         method: 'DELETE',
//         url: 'http://localhost:3000/api/users/',
//         // id: '@user',
//         transformRequest: [],
//         headers: {'Content-Type': 'application/x-www-form-urlencoded'}
//       }
//     });
//     return User;
//   }];
// });








// app.factory('Auth', function ($firebaseSimpleLogin, FIREBASE_URL, $rootScope) {
//   var ref = new Firebase(FIREBASE_URL);
//   var auth = $firebaseSimpleLogin(ref);

//   var Auth = {
//     register: function (user) {
//       return auth.$createUser(user.email, user.password);
//     },
//     login: function (user) {
//       return auth.$login('password', user);
//     },
//     logout: function () {
//       auth.$logout();
//     },
//     resolveUser: function() {
//       return auth.$getCurrentUser();
//     },
//     signedIn: function() {
//       return !!Auth.user.provider;
//     },
//     user: {}
//   };

//   $rootScope.$on('$firebaseSimpleLogin:login', function(e, user) {
//     console.log('logged in');
//     angular.copy(user, Auth.user);
//   });
//   $rootScope.$on('$firebaseSimpleLogin:logout', function() {
//     console.log('logged out');
//     angular.copy({}, Auth.user);
//   });

//   return Auth;
// });





