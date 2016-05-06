(() => {
  angular
    .module('fastbook.group')
    .controller('GroupController', GroupController);

    GroupController.$inject = ['groupService', 'userService', '$state'];

    function GroupController(groupService, userService, $state) {

      this.groupService = groupService;

      this.create = () => {
        groupService
          .createGroup(userService.loggedInUser.id, this.group.name)
      }
    }
})();
