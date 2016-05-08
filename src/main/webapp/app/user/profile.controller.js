'use strict';

(() => {
  angular
    .module('fastbook.user')
    .controller('ProfileController', ProfileController);

  ProfileController.$inject = [
    'user', 'userService', 'accessService', 'userFriendList', 'groupService',
    'userGroupList', '$state', '$stateParams', '$log', 'userPosts', '$scope'
  ];

  function ProfileController(
    user, userService, accessService, userFriendList, groupService,
    userGroupList, $state, $stateParams, $log, userPosts, $scope
  ) {
    $log.debug('ProfileController initializing...')

    this.profileUser = user;
    this.loggedInUser = accessService.currentUser;
    this.friendList = userFriendList;
    this.groupList = userGroupList;
    this.userService = userService;
    this.usersPosts = userPosts;

    // only show 'Create Group' button on the logged in user's profile
    if (this.profileUser.id == this.loggedInUser.id) {
      this.showCreateGroup = true;
    } else {
      this.showCreateGroup = false;
    }

    this.showCreateGroup

    $log.debug(this.profileUser)
    $log.debug(this.profileUser.id)
    $log.debug(this.loggedInUser)
    $log.debug(this.loggedInUser.id)
    $log.debug(this.friendList)
    $log.debug(this.groupList)

    userService.setProfileUser(user);

    $log.debug(userService.profileUser)

    this.calculateAge = () => {
      var ageDifMs = Date.now() - new Date(this.profileUser.birthDate);
      var ageDate = new Date(ageDifMs);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    };

    this.post = () => {
      $log.debug('ProfileController.post-init')
      $scope.date = new Date();
      this.userService.post.timestamp = $scope.date;
      this.userService.post.user = this.loggedInUser;
      userService
        .postToUserTimeline(this.userService.post, this.loggedInUser)
        .then(() => {
          this.userService.post = null;
          $state.reload();
        });
    }

  }
})();
