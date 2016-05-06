'use strict';

(() => {
  angular
    .module('fastbook.friend')
    .controller('ReviewFriendRequestsController', ReviewFriendRequestsController);

  ReviewFriendRequestsController.$inject = [
    'friendRequestsToResolve', 'friendService', 'accessService', '$log', '$state'
  ];

  function ReviewFriendRequestsController(
    friendRequestsToResolve, friendService, accessService, $log, $state
  ) {
    this.accessService = accessService;
    $log.debug('ReviewFriendRequestsController initialize');

    $log.debug(friendRequestsToResolve);

    this.friendRequestsToResolve = friendRequestsToResolve;
    $log.debug(this.friendRequestsToResolve);

    this.acceptFriendRequest = function(friend) {
      $log.debug('Accepting friend');
      friendService
        .acceptFriendRequestFromList(friend)
        .then(() => $state.reload())
    };

    this.rejectFriendRequest = function(friend) {
      $log.debug('Denying friend');
      friendService
        .rejectFriendRequestFromList(friend)
        .then(() => $state.reload())
    };




    $log.debug('ReviewFriendRequestsController exit');
  }

})();
