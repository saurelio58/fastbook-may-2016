'use strict';

(() => {
  angular
    .module('fastbook.access')
    .controller('RegisterController', RegisterController);

  RegisterController.$inject = ['$scope', 'accessService', '$state', '$log'];

  function RegisterController($scope, accessService, $state, $log) {

    $log.debug('RegisterController-init');
    $scope.date = new Date();

    this.maxDate = new Date();

    this.register = () => {
      this.errorMessage = null;
      this.user.joinDate = $scope.date;
      accessService
        .register(this.user)
        .then(result => {
          // user already exists
          this.errorMessage = 'User already exists!';
        })
    }

    this.goToLogin = () => {
      $log.debug('RegisterController-goToLogin-init');
      $state.go('login');
    }
  }

})();
