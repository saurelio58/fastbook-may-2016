'use strict';

(() => {
  angular
    .module('fastbook.friend')
    .controller('FriendRelationController', FriendRelationController);

    FriendRelationController.$inject = ['accessService', 'userService', 'friendService', '$state', '$log', '$scope'];

    function FriendRelationController(accessService, userService, friendService, $state, $log, $scope) {
      this.profileUser = userService.profileUser;
      $log.debug('FriendRelationController-Profile Id: ' + this.profileUser.id);

      this.loggedInUser = accessService.currentUser;
      $log.debug('FriendRelationController-Logged in Id: ' + this.loggedInUser.id);

      this.relation;

      friendService.getRelation(this.profileUser.id)
        .then(relation => {
          this.relation = relation;
          // $log.debug('FriendRelationController-relation=' + this.relation);
          // $log.debug('Relationship of users, sentId: ' + this.relation.id.sentId);
          // $log.debug('Relationship of users, receivedId: ' + this.relation.id.receivedId);
          // $log.debug('Relationship of users, status: ' + this.relation.status);
          // $log.debug('Executing this.relation !== undefined: ' + (this.relation !== undefined));
        });

      this.addFriend = () => {
        friendService.addFriendRequest(this.profileUser.id)
          .then($state.reload());
      }

      this.denyRequest = () => {
        friendService.denyRequest(this.profileUser.id)
          .then($state.reload());
      }

      this.acceptRequest = () => {
        friendService.acceptRequest(this.profileUser.id, this.relation)
          .then($state.reload());
      }

    }
})();
