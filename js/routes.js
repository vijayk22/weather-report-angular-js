//routes

weatherApp.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'pages/home.htm',
            controller: 'homeController'
        })
        .when('/forcast', {
            templateUrl: 'pages/forcast.htm',
            controller: 'forecastController'
        })
        .when('/forcast/:days', {
            templateUrl: 'pages/forcast.htm',
            controller: 'forecastController'
        })
});
