'use strict';

(() => {
  angular
    .module('fastbook.user')
    .constant('userRoutes', {
      profile: {
        url: '/users/{id}',
        templateUrl: 'app/user/profile.template.html',
        controller: 'ProfileController',
        controllerAs: '$profileCtrl',
        resolve: {
          user: ['userService', '$stateParams', function(userService, $stateParams) {
            return userService.getUserById($stateParams.id);
          }]
        },
        data: {
          loggedIn: false
        }
      },

      search: {
        url: '/user',
        templateUrl: 'app/nav_bar/nav.template.html',
        controller: 'NavController',
        controllerAs: '$nav'
      }
    })
})();
