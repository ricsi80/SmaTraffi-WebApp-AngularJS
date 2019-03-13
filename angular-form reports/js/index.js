// A jQuery $( document ).ready() Block
$(document).ready(function () {


}); // End of A jQuery $( document ).ready() Block


// An AngularJS Block
var app = angular.module('app', ['angular-jwt']).controller('AppCtrl',
    function () {

        this.myDate = new Date();
        this.isOpen = false;
    });


app.service('myService', function () {
    /* ... */
});

app.config(function Config($httpProvider, jwtInterceptorProvider) {
    // Please note we're annotating the function so that the $injector works when the file is minified 
    jwtInterceptorProvider.tokenGetter = ['myService', function () {

        return localStorage.getItem('id_token');

    }];

    $httpProvider.interceptors.push('jwtInterceptor');
});

app.controller('appCtrl', function ($scope, $http) {

    $scope.intersection = ["Gachibowli", "Gachibowli1", "Gachibowli2"];
    $scope.report = ["Daily Report", "Weekly Report", "Monthly Report"];
    $scope.format = ["pdf", "doc", "text"];
    $scope.type = ["email", "hardcopy", "binded"];
    $scope.recipient = ["a@gmail.com", "b@gmail.com", "c@gmail.com", "d@gmail.com"];


    $scope.myTxt = "You have not yet clicked submit";
    $scope.myFunc = function () {
        $scope.myTxt = "You clicked submit!";
    };

});

app.directive("datepicker", function () {
    return {
        restrict: "A",
        require: "ngModel",
        link: function (scope, elem, attrs, ngModelCtrl) {
            var updateModel = function (dateText) {
                scope.$apply(function () {
                    ngModelCtrl.$setViewValue(dateText);
                });
            };
            var options = {
                dateFormat: "dd/mm/yy",
                onSelect: function (dateText) {
                    updateModel(dateText);
                }
            };
            elem.datepicker(options);
        }
    };
});