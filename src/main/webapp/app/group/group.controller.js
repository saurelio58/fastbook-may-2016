(() => {
  angular
    .module('fastbook.group')
    .controller('GroupController', GroupController);

    GroupController.$inject = ['groupService', 'userService', '$state', '$scope', '$mdDialog'];

    function GroupController(groupService, userService, $state, $scope) {

      this.groupService = groupService;

      $scope.showAlert = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Invalid Operation')
        .textContent('You are already a member of this group')
        .ariaLabel('Alert Dialog')
        .ok('OK')
        .targetEvent(ev)
        );
      }

      this.createPostInGroup = () =>{
        $scope.date = new Date();
        this.groupService.groupPost.timestamp = $scope.date;
        groupService.postToGroup(this.groupService);

}
      this.create = () => {
        groupService
          .createGroup(userService.currentUser.id, this.group.name)
          .then(createdGroup => groupService.group = createdGroup)
          .$state.go('group', {id: groupService.group.id})
      }

      this.joinGroup = () => {

        groupService
          .joinGroup(groupService.group.id, userService.currentUser.id)
          .then(response => {
            if (response == null) {
              $scope.showAlert()
            }
          })
      }
    }
})();
