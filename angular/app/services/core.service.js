angular.module('myApp.services', []).
    factory('coreService', function ($http) {

        var API_URL = 'https://t21f47cze5.execute-api.us-east-1.amazonaws.com/prod/v1/';

        var service = this;

        return {
            setUser: function (user1) {
                service.user = user1;
            },

            getUser: function (user) {
                return service.user;
            },

            sendVote: function (choices) {
                var myChoices = [];
                choices.forEach(function (choice_i) {
                    myChoices.push({"id": choice_i.id, "choice": choice_i.choice || false});
                });

                return $http({
                    method: 'post',
                    url: API_URL + 'votes',
                    data: {
                        "email": service.user.email,
                        "choices": myChoices
                    }
                });

            },

            receiveChoices: function () {
                return $http({
                    method: 'get',
                    url: API_URL + 'choices'
                });
            },

            receiveResults: function () {
                return $http({
                    method: 'get',
                    url: API_URL + 'result'
                });
            }
        }

    });