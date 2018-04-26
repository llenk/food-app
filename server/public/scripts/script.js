var app = angular.module('FoodApp', []);

app.controller('FoodController', ['$http', function ($http) {
    console.log('FoodController loaded');

    var self = this;

    self.newFood = {};

    self.displayArray = function() {
        $http({
            method: 'GET',
            url: '/food'
            }).then(function successCallback(response) {
                self.foodArray = response.data;
            }).catch(function (response) {
             self.foodArray = response.statusText;
        });
    }

    self.createFood = function () {
        $http({
            method: 'POST',
            url: '/food',
            data: newFood
        }).then(function successCallback(response) {
            console.log(response.status);
            self.displayArray();
        }).catch(function (error) {
            console.log(error);
        })
    };

    self.deleteFood = function(food) {
        $http({
            method: 'DELETE',
            url: '/food',
            params: food
        }).then(function(response) {
            console.log(response.status);
            self.displayArray();
        }).catch(function (error) {
            console.log(error);
        });
    };

    self.saveFood = function(food) {
        $http({
            method: 'PUT',
            url: '/food',
            data: food
        }).then(function (response) {
            console.log(response.status);
            self.displayArray();
        }).catch(function (error) {
            console.log(error);
        });
    }

    self.displayArray();
}]);

