'use strict';

(() => {
  angular
    .module('fastbook.user')
    .controller('ProfileController', ProfileController);

  ProfileController.$inject = [
    'user', 'userService', 'accessService', '$state', '$log'
  ];

  function ProfileController(
    user, userService, accessService, $state, $log
  ) {
    this.user = user;

    userService.setProfileUser(user);

    this.userService = userService;
    this.loggedInUser = accessService.currentUser;
    this.friendList;

    this.getFriendsList = () => {
      userService
        .getUsersFriends(userService.profileUser.id)
        .then(list => this.friendList = list)
    };

    angular.forEach(this.friendList, function(value, key) {
      userService
        .getFriendRequestOnProfile(value.id, this.loggedInUserId.id)
      });
  }
})();
