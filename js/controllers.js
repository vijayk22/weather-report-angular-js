//controller

/*
    syntax note for study: 
    <moduleName>.controller('<controllerName>',['$scope', '<serviceName>', function($scope, <serviceName>){
    
    //declare a method
    $scope.bar = function foo(){
        return bar
    }
    // call a method on service
    $scope.bar = <serviceName>.methodName(params....);
    }]);
*/

//declare home controller
weatherApp.controller('homeController', ['$scope', 'cityService', function ($scope, cityService) {

    //city city has a 'watcher' added it only work with $scope (this operator won;t work with watch). 
    $scope.city = cityService.city;

    $scope.$watch('city', function () {
        cityService.city = $scope.city;
    });
    }]);

//declare forecast controller
weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', 'weatherService', function ($scope, $resource, $routeParams, cityService, weatherService) {

    $scope.city = cityService.city;
    //since no watcher this.days is fine.
    this.days = $routeParams.days || '2';

    //call weather service
    //weatherResult is used in directive hence need to set to scope.
    $scope.weatherResult = weatherService.GetWeather($scope.city, this.days);

    //other functions.

    //note about $scope vs this on fuction - $scope will let this function access in directive html template. With .this it is not possible as function is limited to controller only (not in html template)
    $scope.convertTemp = function (degreeKevin) {
        return Math.round((1.8 * (degreeKevin - 273)) + 32);
    }

    $scope.convertToDate = function (dt) {
        return new Date(dt * 1000);
    }

    }]);
