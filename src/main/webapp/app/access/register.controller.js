'use strict';

(() => {
  angular
    .module('fastbook.access')
    .controller('registerController', RegisterController);

    RegisterController.$inject = ['$scope'];

    function RegisterController($scope) {

      $scope.myDate = new Date();

    }

})();
