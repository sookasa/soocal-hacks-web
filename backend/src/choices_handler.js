var async = require('async');

exports.choices_handler = function(event, context) {
    console.log('Choices Handler - Received Event:', JSON.stringify(event, null, 2));

    var date = event.date !== undefined ? new Date(event.date): new Date();
    date.setHours(0,0,0,0);

    getChoices(date, function(err, choices) {
        async.map(choices,
            function(choice, callback) {
                var yelpId = choice.yelpId;
                get_restaurant_info(yelpId, function(err, yelpInfo) {
                    callback(null, { choiceId: choice.id, yelp: yelpInfo});
                });
            },
            function(err, results) {
                var choices = [];
                for(var i=0; i<results.length; i++) {
                    var info = results[i];
                    console.log(JSON.stringify(info));
                    choices.push({
                        'id': info.choiceId,
                        'name': info.yelp.name,
                        'picture': info.yelp.picture,
                        'tags': info.yelp.tags,
                        'yelp': info.yelp.url
                    });
                }

                var response = {
                    'date': date,
                    'choices': choices
                };

                context.done(null,  response);
            }
        );
    });
};
