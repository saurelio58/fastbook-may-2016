'use strict';

(() => {
  angular
    .module('fastbook.user')
    .controller('ProfileController', ProfileController);

  ProfileController.$inject = [
    'user', 'userService', 'accessService', 'userFriendList', '$state', '$stateParams','$log', '$scope', 'userPosts'
  ];

  function ProfileController(
    user, userService, accessService, userFriendList, $state, $stateParams, $log, $scope, userPosts
  ) {
    this.profileUser = user;
    this.loggedInUser = accessService.currentUser;
    this.friendList = userFriendList;
    this.userService = userService;
    this.usersPosts = userPosts;

    $log.debug(this.profileUser)
    $log.debug(this.profileUser.id)
    $log.debug(this.loggedInUser)
    $log.debug(this.loggedInUser.id)
    userService.setProfileUser(user);

    $log.debug(this.friendList)
    this.calculateAge = () => {
      var ageDifMs = Date.now() - new Date(this.profileUser.birthDate);
      var ageDate = new Date(ageDifMs);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    };

    this.post=() => {
      $log.debug('Trying to post')
      $scope.date = new Date();
      this.userService.post.timestamp = $scope.date;
      this.userService.post.user = this.loggedInUser;
        userService.postToUserTimeline(this.userService.post, this.loggedInUser)
            .then(() => $state.reload());
    }

  }
})();
