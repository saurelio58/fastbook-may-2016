'use strict';

(() => {
  angular
    .module('fastbook.group')
    .service('groupService', GroupService);

    GroupService.$inject = ['$http', '$state', '$log'];

    function GroupService(
      $http,
      $state,
      $log
    ) {

      this.group;

      this.getUsersInGroup = () => {

        return $http
          .get('./api/groups/users/{id}')
          .then(response => response.data)
      }

      this.getUsersInGroup = () => {

        return $http
          .get('./api/post/group/{id}')
          .then(response => response.data)
      }

      this.postToGroup = () => {
        return $http
          .post('./api/')
      }


    }

})();
