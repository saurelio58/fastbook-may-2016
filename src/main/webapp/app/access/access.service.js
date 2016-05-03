'use strict';

(() => {
  angular
    .module('fastbook.access')
    .service('accessService', AccessService);

    AccessService.$inject = ['$http'];

    function AccessService($http) {

      this.register() {
        return $http
          .post('./api/users', user)
          .then(response => response.data)
        }

      this.login() {
        return $http
          .get('./api/users/login')
          .then(response => response.data)
      }


    }

})();
