'use strict';

(() => {
  angular
    .module('fastbook.friend')
    .service('friendService', FriendService);

  FriendService.$inject = ['$http'];

  function FriendService($http) {

    this.acceptFriendRequest = function(friend) {
      // $log.debug('userService - acceptFriendRequest - initialize');
      return $http
        // .patch('./api/' + accessService.currentUser.id + 'acceptRequest', friend)
        .patch('./api/users/1/acceptRequestFromList', friend)
        .then(response => response.data);
    };

    this.rejectFriendRequest = function(friend) {
      $log.debug('userService - rejectFriendRequest - initialize');
      return $http
        // .delete('./api/' + id + 'denyRequestFromList' + friend.id.sentId)
        .delete('./api/users/1/denyRequestFromList/' + friend.id.sentId)
        .then(response => response.data);
    };

    this.getFriendsById = function(id) {
      return $http
        .get('./api/' + id + '/friends')
        .then(response => response.data);
    };

    this.getFriendRequests = function(id) {
      $log.debug('userService entered');
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





  }

})();
