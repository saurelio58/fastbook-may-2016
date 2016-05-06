'use strict';

(() => {
  angular
    .module('fastbook.user')
    .controller('ProfileController', ProfileController);

  ProfileController.$inject = [
    'user', 'userService', 'accessService', 'userFriendList', 'groupService', 'userGroupList', '$state', '$stateParams','$log'
  ];

  function ProfileController(
    user, userService, accessService, userFriendList, groupService, userGroupList, $state, $stateParams, $log
  ) {
    $log.debug('ProfileController initializing...')

    this.profileUser = user;
    this.loggedInUser = accessService.currentUser;
    this.friendList = userFriendList;
    this.groupList = userGroupList;

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
    }
  }
})();
