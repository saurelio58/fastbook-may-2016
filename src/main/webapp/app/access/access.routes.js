'use strict';

(() => {
  angular
    .module('fastbook.access')
    .constant('accessRoutes', {

        register: {
          url: '/',
          templateUrl: 'app/access/register.template.html',
          controller: 'registerController',
          controllerAs: '$register',
          data: {
            loggedIn: false
          }
        },

        login: {
          url: '/login',
          templateUrl: 'app/access/login.template.html',
          controller: 'LoginController',
          controllerAs: '$login',
          data: {
            loggedIn: false
          }
        }
      });
  })();
