'use strict';

(() => {
  angular
  .module('fastbook')
  .config(config);

  config.$inject = [
    '$urlRouterProvider',
    '$locationProvider',
    '$mdThemingProvider',
    '$mdDateLocaleProvider'
  ];

  function config(
    $urlRouterProvider,
    $locationProvider,
    $mdThemingProvider,
    $mdDateLocaleProvider
  ) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();
  }
})();
