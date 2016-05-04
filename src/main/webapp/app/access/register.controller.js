'use strict';

(() => {
  angular
    .module('fastbook.access')
    .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['$scope', 'accessService', '$state', '$log'];

    function RegisterController($scope, accessService, $state, $log) {

      $log.debug('Creating $register');
      $scope.date = new Date();

      this.register = () => {
        this.user.joinDate = $scope.date;
        accessService
          .register(this.user)
          .then(registeredUser => {$state.go('profile', {userId: registeredUser.userId})})
      }

      this.goToLogin = () => {
        $log.debug('Clicked goToLogin');
        $state.go('login');
      }
    }

})();
