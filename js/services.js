//services


weatherApp.service('cityService', function () {
    this.city = "Madison,WI";
});

//service
weatherApp.service('weatherService', ['$resource', function ($resource) {

    //method
    this.GetWeather = function (city, days) {
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {
            callback: "JSON_CALLBACK"
        }, {
            get: {
                method: "JSONP"
            }
        });
        weatherResult = weatherAPI.get({
            q: city,
            cnt: days,
            appid: '44db6a862fba0b067b1930da0d769e98'
        });
        return weatherResult;
    };
}]);
