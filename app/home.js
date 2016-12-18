
angular.module('app')
    .controller('homeController', [
        '$scope',
        function($scope){
            console.log('testCtrl init')
            $scope.name = 'korven'
        }
    ])





