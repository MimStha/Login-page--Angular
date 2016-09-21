(function () {
    'use strict';

    angular
        .module('app')
        .controller('registerCtrl', ['$scope', '$uibModalInstance',
            function ($scope, $uibModalInstance) {
                // Register new user
                $scope.newUser = function () {
                    alert($scope.signup.fullName);


                    $uibModalInstance.close();
                }

                // Cancel
                $scope.cancel = function () {
                    $uibModalInstance.dismiss('cancel');
                }
            }
        ]);
})();
