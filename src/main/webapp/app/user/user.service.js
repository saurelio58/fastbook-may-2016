'use strict';

(() => {
  angular
    .module('fastbook.user')
    .service('userService', UserService);

  UserService.$inject = ['$http', '$log'];

  function UserService($http, $log) {

    this.listOfUsers;

    this.getAllUsers = function() {
      return $http
        .get('./api/users/')
        .then(response => response.data);
    };

    this.getUsersByName = function(name) {
      return $http
        .get('./api/users/find/' + name)
        .then(response =>{
          $log.debug(response);
          return response.data;
        });
    };





  }

})();
