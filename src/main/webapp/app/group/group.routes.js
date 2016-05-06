(() => {
  angular
    .module('fastbook.group')
    .constant('groupRoutes', {

      group: {
        url: '/groups/{id}',
        templateUrl: 'app/group/group.template.html',
        controller: 'GroupController',
        controllerAs: '$group',
        resolve: {
          groupMembers: ['groupService', '$stateParams', function (groupService, $stateParams) {
            return groupService.getUsersInGroup($stateParams.id)
          }],
          posts: ['groupService', '$stateParams', function (groupService, $stateParams) {
            return groupService.getGroupPosts($stateParams.id)
          }]
        },
        data: {
          loggedIn: true
        }
      },

      groupCreate: {
        url: '/groups/',
        templateUrl: 'app/group/group-create.template.html',
        controller: 'GroupController',
        controllerAs: '$group',
        data: {
          loggedIn: true
        }
      }

    })
})();
