(()=>{
  angular
    .module('fastbook')
    .controller('AppController', AppController);

    AppController.$inject = ['accessService'];

    function AppController(accessService) {
      
      this.accessService = accessService;


    }

})();
