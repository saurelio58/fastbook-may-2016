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

    this.acceptFriendRequest(id) = () => {
      userService
        .acceptFriendRequest(id)
        .then($state.reload())
    };

    this.rejectFriendRequest(id) = () => {
      userService
        .rejectFriendRequest(id)
        .then($state.reload())
    };




    $log.debug('ReviewFriendRequestsController exit');
  }

})();
