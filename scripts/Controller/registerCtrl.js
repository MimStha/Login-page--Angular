(function () {
    'use strict';

    angular
        .module('app')
        .controller('registerCtrl', ['$scope', '$uibModalInstance',
            function ($scope, $uibModalInstance) {
                $scope.signup = {};
                // Register new user
                $scope.newUser = function () {



                    // close the pop up modal after saving the data from users
                    $uibModalInstance.close();
                }

                // Cancel/ close the pop up modal if clicked cancel
                $scope.cancel = function () {
                    $uibModalInstance.dismiss('cancel');
                }
            }
        ]);
})();
