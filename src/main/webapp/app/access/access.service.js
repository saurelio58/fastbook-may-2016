'use strict';

(() => {
  angular
    .module('fastbook.access')
    .service('accessService', AccessService);

    AccessService.$inject = ['$http'];

    function AccessService($http) {

<<<<<<< Updated upstream
      this.register() {
=======
      this.register = (user) => {
>>>>>>> Stashed changes
        return $http
          .post('./api/users', user)
          .then(response => response.data)
        };

<<<<<<< Updated upstream
      this.login() {
=======
      this.login = (email, domain) => {
>>>>>>> Stashed changes
        return $http
          .get('./api/users/login')
          .then(response => response.data)
      }


    }

})();
