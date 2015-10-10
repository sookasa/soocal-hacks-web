var pg = require('pg');
var conString = "postgres://lunchify:lunchify@localhost/lunchify";

function dbAccess(fn) {
    var client = new pg.Client(conString);
    client.connect(function(err) {
        if (err) {
            return console.error('Could not connect to postgres', err);
        } else {
            fn(client);
        }
    });
}

function handleError(err) {
    if(!err) return false;

    console.error('Error running query', err);
    return true;
}

function addChoice(date, yelp_id, callback) {
    dbAccess(function(client) {
        client.query('INSERT INTO choices (date, yelp_id) VALUES ($1, $2) RETURNING id', [date, yelp_id], function(err, result) {
            if (handleError(err)) {
                client.end();
                callback(err, null);
            } else {
                var choice = {
                    'id': result.rows[0].id,
                    'date': date,
                    'yelp_id': yelp_id
                };

                client.end();
                callback(null, choice);
            }
        });
    });
}

function getChoices(date, callback) {
    dbAccess(function(client) {
        client.query('SELECT date, yelp_id WHERE date=$1', [date], function(err, result) {
            if (handleError(err)) {
                client.end();
                callback(err, null);
            } else {
                var choices = [];

                for(var row in result.rows) {
                    var choice = {
                        'date': row.date,
                        'yelp_id': row.yelp_id
                    };
                    choices.push(choice);
                }

                client.end();
                callback(null, choices);
            }
        });
    });
}

function addVote(date, email, like, callback) {

}
