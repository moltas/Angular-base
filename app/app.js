
angular.module('app', [])
    .controller('testController', [
        '$scope',
        function($scope){
            console.log('testCtrl init')
            $scope.name = 'korven'
        }
    ])



