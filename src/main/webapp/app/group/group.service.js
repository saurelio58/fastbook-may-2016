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

      this.listOfGroups;

      this.getUsersInGroup = () => {

        return $http
          .get('./api/groups/users/{id}')
          .then(response => response.data)
      }

      this.getPostsInGroup = () => {

        return $http
          .get('./api/post/group/{id}')
          .then(response => response.data)
      }

      this.postToGroup = () => {
        return $http
          .post('./api/')
      }

      this.getGroupsByName = function(name) {
        return $http
          .get('./api/groups/find/' + name)
          .then(response =>{
            $log.debug(response);
            return response.data;
          });
      }


    }

})();
