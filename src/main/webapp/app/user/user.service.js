'use strict';

(() => {
  angular
    .module('fastbook.user')
    .service('userService', UserService);

  UserService.$inject = ['$http', '$log'];

  function UserService($http, $log) {

    this.getAllUsers = function() {
      return $http
        .get('./api/users/')
        .then(response => response.data);
    };

    this.getUsersByName = function(name) {
      return $http
        .get('./api/users/find' + name)
        .then(response => response.data);
    };

    this.getFriendsById = function(id) {
      return $http
        .get('./api/' + id + '/friends')
        .then(response => response.data);
    };

    this.getFriendRequests = function(id) {
      return $http
        .get('./api/users/' + id + '/my_pending_requests')
        .then(response => response.data);
    };

    // Request body contains logged in user
    this.addFriendRequest = function(loggedInUser, friendId) {
      return $http
        .put('./api/users/' + friendId + '/requests', loggedInUser)
        .then(response => response.data);
    };

    this.acceptFriendRequest = function(friend) {
      $log.debug('userService - acceptFriendRequest - initialize');
      this.loggedInUser = loginService.getLoggedInUser();
      return $http
        .patch('./api/' + id + 'requests', friend)
        .then(response => response.data);
    };

    this.rejectFriendRequest = function(friend) {
      $log.debug('userService - rejectFriendRequest - initialize');
      return $http
        .delete('./api/' + id + 'requests', friend)
        .then(response => response.data);
    };



  }

})();
