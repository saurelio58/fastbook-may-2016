'use strict';

(() => {
  angular
    .module('fastbook.user')
    .controller('NavController', NavController);

    NavController.$inject = [
      'userService', 'groupService', '$log', '$state'
    ];

    function NavController(userService, groupService, $log, $state) {

      $log.debug('navController initialize');

      this.userName;
      this.user = userService;
      this.group = groupService;

      this.searchNames = () =>{
        $log.debug(this.userName);
        this.user.getUsersByName(this.userName)
            .then(data => this.user.listOfUsers = data);

        this.group.getGroupsByName(this.userName)
            .then(data => this.group.listOfGroups = data);
        $state.go('search');

    }
  }

})();
