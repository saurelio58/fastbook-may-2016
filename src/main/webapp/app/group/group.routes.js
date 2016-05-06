(() => {
  angular
    .module('fastbook.group')
    .constant('groupRoutes', {

      group: {
        url: '/groups/{groupId}',
        templateUrl: 'app/group/group.template.html',
        controller: 'GroupController',
        controllerAs: '$group',
        resolve: {
          groupMembers: ['groupService', '$stateParams', function (groupService, $stateParams) {
            return groupService.getUsersInGroup($stateParams.groupId)
          }],
          posts: ['groupService', '$stateParams', function (groupService, $stateParams) {
            return groupService.getGroupPosts($stateParams.groupId)
          }],
          groupOwner: ['groupService', '$stateParams', function (groupService, $stateParams) {
            return groupService.getGroupsOwner($stateParams.groupId)

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
