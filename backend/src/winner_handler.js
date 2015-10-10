var async = require('async');

exports.winner_handler = function(event, context) {
    console.log('Winner Handler - Received Event:', JSON.stringify(event, null, 2));

    var date = event.date !== undefined ? new Date(event.date): new Date();
    date.setHours(0,0,0,0);

    getWinner(date, function(err, winner) {
        var response = {
            'date': date
        };

        if (winner !== undefined) {
            response.result = {
                'id': winner.choiceId,
                'yelpId': winner.yelpId
                // TODO: get yelp info and create response
            };
        }

        context.done(null,  response);
    });
};
