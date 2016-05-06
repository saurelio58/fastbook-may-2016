(() => {
  angular
    .module('fastbook.group')
    .controller('GroupController', GroupController);

    GroupController.$inject = [
      'groupService',
      'userService',
      '$state',
      '$scope',
      '$mdDialog',
      '$log',
      'groupMembers',
      'posts',
      'groupOwner'
    ];

    function GroupController(
      groupService,
      userService,
      $state,
      $scope,
      $log,
      groupMembers,
      posts,
      groupOwner

    ) {

      this.groupService = groupService;
      this.groupMembers = groupMembers;
      this.posts = posts;
      this.groupOwner = groupOwner;

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
        groupService.postToGroup(this.groupService);

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
    }
})();
