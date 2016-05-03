'use strict';

(() => {
  angular
    .module('fastbook.user')
    .service('userService', UserService);

    UserService.$inject = ['$http'];

    function UserService($http) {
      
    }

})();
