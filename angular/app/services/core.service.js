angular.module('myApp.services', []).
    factory('coreService', function ($http) {

        //var api = {};
        console.log('service');
        var initChoices = function () {
            // get choices from server api
            var choices = [
                {
                    id: 0,
                    name: 'Pacific Catch',
                    tags: ['asian'],
                    picture: 'https://material.angularjs.org/0.11.2/img/icons/angular-logo.svg',
                    yelp: 'http://www.yelp.com/pacific-catch'
                },
                {
                    id: 1,
                    name: 'Seniores Pizza',
                    tags: ['pizza'],
                    picture: 'https://material.angularjs.org/0.11.2/img/icons/angular-logo.svg',
                    yelp: 'http://www.yelp.com/seniores-pizza'
                },
                {
                    id: 2,
                    name: 'B Street and Vine',
                    tags: ['italian'],
                    picture: 'https://material.angularjs.org/0.11.2/img/icons/angular-logo.svg',
                    yelp: 'http://www.yelp.com/b-street-and-vine'
                }
            ];
            choices.forEach(function(choice_i){
                    choice_i.choice = false;
                });
            return choices;
        };
        var choices = initChoices();
        console.log('choices = ' + choices);

        var submitVote = function (myChoices) {
            console.log(myChoices);
        };

        return {
            setUser: function (user1) {
                this.user = user1;
            },

            getUser: function (user) {
                return this.user;
            },

            getChoices: function () {
                return choices;
            },

            vote: function (choices) {
                var myChoices = [];
                choices.forEach(function(choice_i){
                    myChoices.push({id: choice_i.id, choice: choice_i.choice});
                });
                submitVote(myChoices);
            }
        }

        //return api;
    });