'use strict';

(() => {
  angular
    .module('fastbook')
    .run(run);

    run.$inject = ['$rootScope', '$state'];

    function run($rootScope, $state) {
      $rootScope.$on('$stateChangeStart', function(event, toState, toStateParams){

        let anonymousAllowed = toState.data.anonymousAllowed;
        let loggedIn = personService.isLoggedIn();

        if(!loggedIn){
          event.preventDefault();$state.go('login')
        }

      });
    }

})();
