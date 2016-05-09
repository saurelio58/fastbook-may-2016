'use strict';

(() => {
  angular
    .module('fastbook.access')
    .constant('accessRoutes', {

      login: {
        url: '/login',
        templateUrl: 'app/access/login.template.html',
        controller: 'LoginController',
        controllerAs: '$login',
        data: {
          loggedIn: false
        }
      },
      register: {
        url: '/register',
        templateUrl: 'app/access/register.template.html',
        controller: 'RegisterController',
        controllerAs: '$register',
        data: {
          loggedIn: false
        }
      }

    });
})();
