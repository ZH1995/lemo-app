// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('lemo', ['ionic', 'lemo.controllers', 'lemo.services', 'lemo.filters'])

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

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  //使用$ionicConfigProvider服务解决ionic项目生成的导航栏在手机顶部的问题
  $ionicConfigProvider.platform.ios.tabs.style('standard');
  $ionicConfigProvider.platform.ios.tabs.position('bottom');
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('standard');

  $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
  $ionicConfigProvider.platform.android.navBar.alignTitle('left');

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  // 使用$stateProvider中的state()方法来进行路由的配置，这是ionic种的路由实现机制
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.message', {
    url: '/message',
    views: {
      'tab-message': {
        templateUrl: 'templates/tab-message.html',
        controller: 'MessageCtrl'
      }
    }
  })

  .state('messageDetail', {
      url: '/message/:messageId',
      templateUrl: 'templates/messageDetail.html',
      controller: 'MessageDetailCtrl'
    })

  .state('tab.media', {
      url: '/media',
      views: {
        'tab-media': {
          templateUrl: 'templates/tab-media.html',
          controller: 'MediaCtrl'
        }
      }
    })

  .state('tab.personal', {
    url: '/personal',
    views: {
      'tab-personal': {
        templateUrl: 'templates/tab-personal.html',
        controller: 'PersonalCtrl'
      }
    }
  })

  .state('login',{
      url:'/login',
      templateUrl:'templates/login.html',
      controller:'LoginCtrl'
  })

  .state('register',{
      url:'/register',
      templateUrl:'templates/register.html',
      controller:'RegisterCtrl'
  })

  .state('modifyPassword',{
      url:'/modifyPassword',
      templateUrl:'templates/modifyPassword.html',
      controller:'ModifyPasswordCtrl'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
