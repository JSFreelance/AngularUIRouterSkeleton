//   here are defined all application states
var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.run([
    "$rootScope", "$state", "$stateParams", function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        return $rootScope.$stateParams = $stateParams;
    }
]);

routerApp.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
          controller: function($scope){
              $scope.tabActive = function($state){
                  return $state.includes("home");
              }
      }
      })
      .state('about', {
          url: '/about',
          template: '<h2>Page 2</h2>'
      });

    $urlRouterProvider.otherwise('/home');

});
