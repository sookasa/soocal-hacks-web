angular.module('myApp.services', []).
    factory('coreService', function ($http) {

        var initChoices = function () {
            // get choices from server api
            var choices = [
                {
                    id: 0,
                    name: 'Pacific Catch',
                    tags: ['asian', 'asi1an', 'asi1adn', 'asi5asan', 'asi5an', 'asi6an'],
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

        var submitVote = function (myChoices) {
        };

        var getResultFromServer = function () {
            // get result from server api
            var result = [
                {
                    id: 0,
                    name: 'Pacific Catch',
                    tags: ['asian', 'asian1', 'asian2', 'asian3', 'asian4', 'coke'],
                    picture: 'https://material.angularjs.org/0.11.2/img/icons/angular-logo.svg',
                    yelp: 'http://www.yelp.com/pacific-catch'
                }
            ];
            return result;
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
            },

            getResult: function () {
                return getResultFromServer();
            }
        }

    });