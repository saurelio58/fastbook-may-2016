'use strict';

(() => {
  angular
    .module('fastbook.user')
    .controller('ReviewFriendRequestsController', ReviewFriendRequestsController);

  ReviewFriendRequestsController.$inject = [
    'friendRequests', 'userService', '$log', '$state'
  ];

  function ReviewFriendRequestsController(
    friendRequests, userService, $log, $state
  ) {

    $log.debug('ReviewFriendRequestsController initialize');

    this.friendRequests = friendRequests;
    this.loggedInFirstName = 'Joshua';
    this.loggedInLastName = 'Dalton';

    this.acceptFriendRequest = function(friend) {
      userService
        .acceptFriendRequest(friend)
        .then(() => $state.reload())
    };

    this.rejectFriendRequest = function(friend) {
      userService
        .rejectFriendRequest(friend)
        .then(() => $state.reload())
    };




    $log.debug('ReviewFriendRequestsController exit');
  }

})();
