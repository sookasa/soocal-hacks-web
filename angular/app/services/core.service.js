angular.module('myApp.services', []).
    factory('coreService', function ($http) {

        //var api = {};
        console.log('service');
        var user = {};

        return {
            setUser: function (user) {
                this.user = user;
            },

            getUser: function (user) {
                return this.user;
            }
        }

        //return api;
    });