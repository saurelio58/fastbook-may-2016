'use strict';

(() => {
  angular
    .module('fastbook.access')
    .controller('registerController', RegisterController);

    RegisterController.$inject = ['$scope', 'accessService', '$state'];

    function RegisterController($scope, accessService, $state) {

      $scope.myDate = new Date();

      this.register = () => {
        accessService
          .register(this.user)
          .then(registeredUser => {$state.go('profile', {username: this.user.username})})
      }


    }

})();
