var async = require('async');

exports.choices_handler = function(event, context) {
    console.log('Choices Handler - Received Event:', JSON.stringify(event, null, 2));

    var date = event.date !== undefined ? new Date(event.date): new Date();
    date.setHours(0,0,0,0);

    getChoices(date, function(err, choices) {
        // TODO: get yelp info and create response
        var response = {
            'date': date,
            'choices': choices
        };

        context.done(null,  response);
    });
};
