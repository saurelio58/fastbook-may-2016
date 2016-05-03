'use strict';

(() => {
  angular
    .module('fastbook.access')
    .service('accessService', AccessService);

    AccessService.$inject = ['$http'];

    function AccessService($http) {

      this.register(user) => {
        return $http
          .post('./api/users', user)
          .then(response => response.data)
        }

      this.login(email, domain) => {
        return $http
          .get('./api/users/'+ email + '/' + domain)
          .then(response => response.data)
      }


    }

})();
