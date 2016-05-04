'use strict';

(() => {
  angular
    .module('fastbook.access')
    .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['$scope', 'accessService', '$state', '$log'];

    function RegisterController($scope, accessService, $state, $log) {

      $log.debug('Creating $register');
      $scope.myDate = new Date();

      this.register = () => {
        accessService
          .register(this.user)
<<<<<<< Updated upstream
          .then(registeredUser => {$state.go('profile', {userId: registeredUser.userId})})
=======
          .then(registeredUser => {
            accessService.loggedIn() ?
            $state.go('profile', {username: this.user.username})
            :$log.debug('login unsuccessful')
          })
>>>>>>> Stashed changes
      }

      this.goToLogin = () => {
        $log.debug('Clicked goToLogin');
        $state.go('login');
      }
    }

})();
