(() => {
  angular
    .module('fastbook.group')
    .controller('GroupController', GroupController);

    GroupController.$inject = ['groupService'];

    function GroupController(groupService) {

      this.groupService = groupService;

      
    }
})();
