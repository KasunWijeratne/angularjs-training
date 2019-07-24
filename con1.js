var app = angular.module('app', []);

app.controller('Controller', function ($scope) {

});
app.controller('BlockController', function ($scope) {

});

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");
    debugger;

    $stateProvider
        .state('Block State' ,
        {
            url: 'block',
            templateUrl: './block.html'
        })
}]);