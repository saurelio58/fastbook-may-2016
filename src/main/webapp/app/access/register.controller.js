'use strict';

(() => {
  angular
    .module('fastbook.access')
    .controller('registerController', RegisterController);

    RegisterController.$inject = ['$scope', 'accessService'];

    function RegisterController($scope, accessService) {

      $scope.myDate = new Date();

      this.register = () => {
        accessService
          .register(this.user)
          .then(registeredUser => {$state.go('login', {username: this.user.username})})
      }


    }

})();
