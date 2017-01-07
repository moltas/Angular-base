(function(){
    'use strict';

    angular.module('app')
        .controller('homeCtrl', [
            '$scope',
            function($scope){
                console.log('testCtrl inisst');
                $scope.name = 'sds'
            }

        ]);
})();







