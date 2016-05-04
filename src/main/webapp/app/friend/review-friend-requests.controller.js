'use strict';

(() => {
  angular
    .module('fastbook.friend')
    .controller('ReviewFriendRequestsController', ReviewFriendRequestsController);

  ReviewFriendRequestsController.$inject = [
    'friendRequestsToResolve', 'friendService', '$log', '$state'
  ];

  function ReviewFriendRequestsController(
    friendRequestsToResolve, friendService, $log, $state
  ) {

    $log.debug('ReviewFriendRequestsController initialize');

    this.friendRequestsToResolve = friendRequestsToResolve;
    this.loggedInFirstName = 'Joshua';
    this.loggedInLastName = 'Dalton';

    this.acceptFriendRequest = function(friend) {
      friendService
        .acceptFriendRequest(friend)
        .then(() => $state.reload())
    };

    this.rejectFriendRequest = function(friend) {
      friendService
        .rejectFriendRequest(friend)
        .then(() => $state.reload())
    };




    $log.debug('ReviewFriendRequestsController exit');
  }

})();
