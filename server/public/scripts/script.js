var app = angular.module('FoodApp', []);

app.controller('FoodController', function($http) {
    console.log('FoodController loaded');

    var self = this;

    $http({
        method: 'GET',
        url: '/food'
    }).then(function successCallback(response) {
        console.log(response.data);
    }, function errorCallback(response) {
        self.foodArray = response.statusText;
    });
});

