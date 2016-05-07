(() => {
  angular
    .module('fastbook.group')
    .controller('GroupCreateController', GroupCreateController);

    GroupCreateController.$inject = [
      'groupService',
      'userService',
      'accessService',
      '$state',
      '$scope',
      '$log'
    ];

    function GroupCreateController(
      groupService,
      userService,
      accessService,
      $state,
      $scope,
      $log


    ) {

      this.groupService = groupService;

      this.create = () => {
        $log.debug(this.group.name);
        $log.debug(accessService.currentUser.id);
        groupService
          .createGroup(accessService.currentUser.id, this.group)
          .then(createdGroup => groupService.group = createdGroup)
          $state.go('group', {id: groupService.group.id})
      }


    }
    }
)();
