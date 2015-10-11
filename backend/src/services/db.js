var pg = require('pg');
//var conString = "postgres://lunchify:lunchify@localhost/lunchify";
var conString = 'postgres://sookasa:sookasa2011@soocal-hacks.cgwunx2nr1t8.us-east-1.rds.amazonaws.com:5432/lunchify';

function dbAccess(fn) {
    console.log('Connect to DB...');
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
        console.log('Start query...');
        client.query('INSERT INTO choices (date, yelp_id) VALUES ($1, $2) RETURNING id', [date, yelp_id], function(err, result) {
            console.log('Got query result :)');
            if (handleError(err)) {
                client.end();
                callback(err, null);
            } else {
                var choice = {
                    'id': result.rows[0].id,
                    'date': date,
                    'yelpId': yelp_id
                };

                client.end();
                callback(null, choice);
            }
        });
    });
}

function getChoices(date, callback) {
    dbAccess(function(client) {
        client.query('SELECT id, date, yelp_id FROM choices WHERE date=$1', [date], function(err, result) {
            if (handleError(err)) {
                client.end();
                callback(err, null);
            } else {
                var choices = [];
                for(var i=0; i<result.rows.length; i++) {
                    var row = result.rows[i];
                    var choice = {
                        'id': row.id,
                        'date': row.date,
                        'yelpId': row.yelp_id
                    };
                    choices.push(choice);
                }

                client.end();
                callback(null, choices);
            }
        });
    });
}

function addVote(date, choiceId, email, like, callback) {
    dbAccess(function(client) {
        like = like === true || like !== 0 ? 1: 0;

        client.query('INSERT INTO votes (date, email, choice_id, "like") VALUES ($1, $2, $3, $4) RETURNING id', [date, email, choiceId, like], function(err, result) {
            if (handleError(err)) {
                client.end();
                callback(err, null);
            } else {
                var vote = {
                    'id': result.rows[0].id,
                    'date': date,
                    'choiceId': choiceId,
                    'email': email,
                    'like': like
                };

                client.end();
                callback(null, vote);
            }
        });
    });
}

function getWinner(date, callback) {
    dbAccess(function(client) {
        client.query('SELECT date, choice_id, (SELECT yelp_id FROM choices WHERE choices.id=votes.choice_id) AS "yelp_id", sum("like") AS "likes" FROM votes WHERE date=$1 GROUP BY date, choice_id ORDER BY "likes" DESC LIMIT 1', [date], function(err, result) {
            if (handleError(err)) {
                client.end();
                callback(err, null);
            } else {
                var winner = undefined;
                if (result.rows.length > 0) {
                    winner = {
                        'date': result.rows[0].date,
                        'choiceId': result.rows[0].choice_id,
                        'yelpId': result.rows[0].yelp_id
                    };
                }

                client.end();
                callback(null, winner);
            }
        });
    });
}
