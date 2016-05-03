'use strict';

(() => {
  angular
  .module('fastbook')
  .config(config);

  config.$inject = ['$urlRouterProvider', '$locationProvider'];

  function config($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  }

})();
