'use strict';
// Simple confirm password directive to match password with given password
angular
    .module('app')
    .directive('matchPassword', function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, elem, attrs, ctrl) {
                ctrl.$parsers.unshift(function (viewValue, $scope) {
                    var noMatch = viewValue != scope.myForm.password.$viewValue;
                    ctrl.$setValidity('noMatch', !noMatch);
                });
            }
        }
    });
