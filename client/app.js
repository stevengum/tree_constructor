let app = angular.module('myApp', ['ngRoute', 'ngMessages']);

app.config($routeProvider => {
    $routeProvider
    .when('/', {
        templateUrl: '/partials/main.html',
        controller: 'treeController',
        controllerAs: 'tC'
    })
    .otherwise('/')
})
