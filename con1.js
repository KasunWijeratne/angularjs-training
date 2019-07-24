var app = angular.module('app', []);

app.controller('Controller', function ($scope) {
    // $scope.asdfadfas = '';

    $scope.$watch(function () {
        console.log($scope.asdfadfas);
        console.log($scope.checkValue);
    });

});