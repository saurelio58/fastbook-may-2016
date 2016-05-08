'use strict';

(() => {
  angular
    .module('fastbook.access')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['accessService', '$state', '$window', '$log'];

  function LoginController(accessService, $state, $window, $log) {
    this.credentials;

    $log.debug('LoginController-init')


    this.credentials;

    this.login = () => {
      $log.debug('LoginController.login-init')
      accessService.login(this.credentials);
    }
  }
})();
