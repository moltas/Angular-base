
(function(){
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', '$urlRouterProvider'], configRoute)
        // .run(['$state', configRoute]);

    function configRoute($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/home/home.html',
                controller: 'homeCtrl',
                controllerAs: 'vm'
            })
    }

})();