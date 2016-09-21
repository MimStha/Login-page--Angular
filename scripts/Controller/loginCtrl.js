(function () {
    'use strict';

    angular
        .module('app')
        .controller('loginCtrl', ['$scope', '$uibModal', '$log',
            function ($scope, $uibModal, $log) {

                $scope.master = {};
                $scope.alerts = [];
                $scope.show = true;
                var userValues = {
                    username: ["mimoh", "creesh", "yashna"],
                    password: ["Mimoh", "Creesh", "Yashna"]
                };

                // Login
                $scope.login = function (userObj) {
                    $scope.show = false;
                    if (typeof userObj !== "undefined" &&
                        typeof userObj.name !== "undefined" &&
                        typeof userObj.password !== "undefined") {
                        var userExist = authorizeUser(userObj);
                        if (userExist.userMatched) {
                            $scope.show = false;
                            console.log("WELCOME " + userExist.userName);
                        } else {
                            $scope.show = true;
                            $scope.alerts = [{
                                type: 'danger',
                                msg: 'Invalid username and password! '
                            }];
                            return;
                        }
                    } else {
                        $scope.show = true;
                        $scope.alerts = [{
                            type: 'warning',
                            msg: 'Please enter username and password to login! '
                        }];
                        return;
                    }
                }

                function authorizeUser(userObj) {
                    var userCheck = {
                        userMatched: false,
                        userName: ""
                    };
                    if (userObj.name != "" && userObj.password != "") {
                        //check if the user exist and also check the password
                        var i;
                        for (i = 0; i < userValues.username.length; i++) {
                            if (String(userObj.name.toLowerCase()) === (String(userValues.username[i].toLowerCase())) &&
                                String(userObj.password) === (String(userValues.password[i]))) {
                                userCheck.userName = userValues.username[i];
                                userCheck.userMatched = true;
                                return userCheck;
                            }
                        }
                    } else {
                        console.log("There's an issue logging in ... ")
                    }
                    return userCheck;
                }

                // Signup new user, opens uibmodal pop-up
                $scope.signup = function () {
                    // uibModal
                    $scope.modalInstance = $uibModal.open({
                        templateUrl: 'views/register-modal.html',
                        controller: 'registerCtrl'
                    });
                }

                // close alerts
                $scope.closeAlert = function (index) {
                    $scope.show = false;
                    // $scope.alerts.splice(index, 1);
                }


            }
        ]);
})();
