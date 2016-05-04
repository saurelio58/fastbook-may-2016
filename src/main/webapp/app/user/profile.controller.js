'use strict';

(() => {
  angular
    .module('fastbook.user')
    .controller('ProfileController', ProfileController);

  ProfileController.$inject = [
    'user', 'userRelation', 'userService', 'accessService', '$state'
  ];

  function ProfileController(
    user, userRelation, userService, accessService, $state
  ) {
    this.profileUser = user;
    this.friendRequest = userRelation;
    this.loggedInUser = accessService.currentUser;
    this.textDefineStatus;
    this.friendList;

    this.getRelationWithUser = () => {
      userService
        .getFriendRequestOnProfile(this.profileUser.id, this.loggedInUser.id)
        .then(friend => this.friendRequest = friend)
        .then(getStatusText())
    };

    this.sendRequest = () => {
      userService
        .sendFriendRequest(this.profileUser.id, this.loggedInUser)
        .then(updatedFriend => this.friendRequest = updatedFriend)
        .then($state.reload())
    };

    this.acceptRequest = () => {
      userService
        .acceptFriendRequestOnProfile(this.profileUser.id, this.friendRequest)
        .then(acceptedFriend => this.friendRequest = acceptedFriend)
        .then($state.reload())
      };

    this.ignoreRequest = () => {
      userService
        .deleteFriendRequestOnProfile(this.profileUser.id, this.loggedInUser.id)
        .then(ignoredFriend => this.friendRequest = ignoredFriend)
        .then($state.reload())
    };

    this.getFriendsList = () => {
      userService
        .getUsersFriends(this.profileUser.id)
        .then(list => this.friendList = list)
    };

    angular.forEach(this.friendList, function(value, key) {
      userService
        .getFriendRequestOnProfile(value.id, this.loggedInUserId.id)

      });

    this.getStatusText = () => {
      if(this.friendRequest.status === true)
      {
        this.textDefineStatus = 'You and ' + profileUser.firstName + ' ' + profileUser.lastName + ' are friends.';
      }
      else if(this.friendRequest.status === false)
      {
        this.textDefineStatus = 'Friend request pending.';
      }
      else
      {
        this.textDefineStatus = 'You and ' + profileUser.firstName + ' ' + profileUser.lastName + ' are not currently friends.';
      }
    };
  }
})();
