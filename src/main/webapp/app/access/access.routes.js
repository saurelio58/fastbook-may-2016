'use strict';

(() => {
  angular
    .module('fastbook.access')
    .constant('accessRoutes', {

      register: {
        url: '/',
        templateUrl: 'app/access/register.template.html',
        controller: 'RegisterController',
        controllerAs: '$register',
        data: {
          loggedIn: false
        },
      }


    })

})();
