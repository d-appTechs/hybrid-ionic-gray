// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('gray', {
    url: '/gray',
    abstract: true,
    templateUrl: 'templates/grays.html'
  })

  // Each tab has its own nav history stack:

  .state('gray.dash', {
    url: '/dash',
    views: {
      'gray-dash': {
        templateUrl: 'templates/gray-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('gray.configs', {
      url: '/configs',
      views: {
        'gray-configs': {
          templateUrl: 'templates/gray-configs.html',
          controller: 'ConfigsCtrl'
        }
      }
    })
    .state('gray.config-detail', {
      url: '/configs/:chatId',
      views: {
        'gray-configs': {
          templateUrl: 'templates/config-detail.html',
          controller: 'ConfigDetailCtrl'
        }
      }
    })

  .state('gray.sync', {
    url: '/sync',
    views: {
      'gray-account': {
        templateUrl: 'templates/gray-sync.html',
        controller: 'SyncCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/gray/dash');

});
