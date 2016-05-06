(() => {
  angular
    .module('fastbook.group')
    .controller('GroupCreateController', GroupCreateController);

    GroupCreateController.$inject = [
      'groupService',
      'userService',
      '$state',
      '$scope',
      '$log'
    ];

    function GroupCreateController(
      groupService,
      userService,
      $state,
      $scope,
      $log


    ) {

      this.groupService = groupService;

      this.create = () => {
        $log.debug($groupCreate.group.name);
        $log.debug(userService.currentUser.id);
        groupService
          .createGroup(userService.currentUser.id, $groupCreate.group)
          .then(createdGroup => groupService.group = createdGroup)
          .$state.go('group', {id: groupService.group.id})
      }


    }
    }
)();
