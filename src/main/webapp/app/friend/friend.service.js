'use strict';

(() => {
  angular
    .module('fastbook.friend')
    .service('friendService', FriendService);

  FriendService.$inject = ['accessService', '$http', '$log'];

  function FriendService(accessService, $http, $log) {

    this.acceptFriendRequestFromList = function(friend) {
      $log.debug('./api/users/' + accessService.currentUser.id + '/acceptRequestFromList');
      return $http
        .patch('./api/users/' + accessService.currentUser.id + '/acceptRequestFromList', friend)
        .then(response => response.data);
    };

    this.rejectFriendRequestFromList = function(friend) {
      $log.debug('./api/users/' + accessService.currentUser.id + '/denyRequestFromList/' + friend.id.sentId);
      return $http
        .delete('./api/users/' + accessService.currentUser.id + '/denyRequestFromList/' + friend.id.sentId)
        .then(response => response.data);
    };

    this.getFriendsById = function(id) {
      return $http
        .get('./api/' + id + '/friends')
        .then(response => response.data);
    };

    this.getFriendRequests = function(id) {

        $log.debug('friendService - getFriendRequests - initialize');

        return $http
          .get('./api/users/' + id + '/my_pending_requests')
          .then(response => {
            $log.debug('friendService - getFriendRequests - response ' + response);
            return response.data

          });
      };

    this.addFriendRequest = function(userId) {
      return $http
        .put('./api/users/' + userId + '/addRequest', accessService.currentUser)
        .then(response => response.data);
    };

    this.denyRequest = function(userId) {
      return $http
        .delete('./api/users/' + userId + '/denyRequest/' + accessService.currentUser.id)
        .then(response => response.data);
    }

    this.acceptRequest = function(userId, friend) {
      $log.debug('Accepting friend: ' + friend);
      return $http
        .patch('./api/users/' + userId + '/acceptRequest', friend)
        .then(response => response.data);
    }

    this.getRelation = function(userId) {
      return $http
        .get('./api/users/' + userId + '/getRequest/' + accessService.currentUser.id)
        .then(response => response.data);
    }
  }

})();
