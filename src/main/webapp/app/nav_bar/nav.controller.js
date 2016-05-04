'use strict';

(() => {
  angular
    .module('fastbook.user')
    .controller('NavController', NavController);

    NavController.$inject = [
      'userService', '$log', '$state'
    ];

    function NavController(userService, $log, $state) {

      $log.debug('navController initialize');

      this.userName;
      this.user = userService;

      this.searchNames = () =>{
        $log.debug(this.userName);
        this.user.getUsersByName(this.userName)
            .then(data => this.user.listOfUsers = data);
            $log.debug('blah');
        $state.go('search');

    }
  }

})();
