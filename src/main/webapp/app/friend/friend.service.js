'use strict';

(() => {
  angular
    .module('fastbook.friend')
    .service('friendService', FriendService);

  FriendService.$inject = ['$http', '$log'];

  function FriendService($http, $log) {

    this.acceptFriendRequest = function(friend) {
      return $http
        .patch('./api/users/1/acceptRequestFromList', friend)
        .then(response => response.data);
    };

    this.rejectFriendRequest = function(friend) {
      $log.debug('friendService - rejectFriendRequest - initialize');
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

        $log.debug('friendService - getFriendRequests - initialize');

        return $http
          .get('./api/users/' + id + '/my_pending_requests')
          .then(response => {
            $log.debug('friendService - getFriendRequests - response ' + response);
            response.data

          });
      };

    // Request body contains logged in user
    this.addFriendRequest = function(loggedInUser, friendId) {
      return $http
        .put('./api/users/' + friendId + '/requests', loggedInUser)
        .then(response => response.data);
    };





  }

})();
