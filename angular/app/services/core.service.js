angular.module('myApp.services', []).
    factory('coreService', function ($http) {

        //var api = {};
        console.log('service');
        var user = {};
//        var this.choices = {};
        var initChoices = function () {
            // get choices from server api
            this.choices = [
                {
                    name: 'Pacific Catch',
                    tags: ['asian', 'asian', 'asian', 'asian', 'asian', 'asian'],
                    picture: 'https://material.angularjs.org/0.11.2/img/icons/angular-logo.svg',
                    yelp: 'http://www.yelp.com/pacific-catch'
                },
                {
                    name: 'Seniores Pizza',
                    tags: ['pizza'],
                    picture: 'https://material.angularjs.org/0.11.2/img/icons/angular-logo.svg',
                    yelp: 'http://www.yelp.com/seniores-pizza'
                },
                {
                    name: 'B Street and Vine',
                    tags: ['italian'],
                    picture: 'https://material.angularjs.org/0.11.2/img/icons/angular-logo.svg',
                    yelp: 'http://www.yelp.com/b-street-and-vine'
                }
            ];
            for (choice in this.choices) {
                choice.choice = false;
            }
        }

        return {
            setUser: function (user) {
                this.user = user;
            },

            getUser: function (user) {
                return this.user;
            },

            getChoices: function () {
                this.initChoices();
            }
        }

        //return api;
    });