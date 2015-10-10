var async = require('async');

exports.votes_handler = function(event, context) {
    console.log('Votes Handler - Received Event:', JSON.stringify(event, null, 2));

    var date = event.date;
    var email = event.email;
    var vote_choices = event.choices;

    if (date === undefined || email === undefined || email.trim() === '' || vote_choices === undefined) {
        context.done({ "status": "error", "error": "Invalid data" });
        return;
    }

    async.map(vote_choices,
        function(vote_choice, callback) {
            addVote(date, vote_choice.id, email, vote_choice.choice, function(err, vote) {
                callback(err, vote);
            });
        },
        function(err, votes) {
            context.done(null, { "status": "ok" });
    });
};
