var async = require('async');

exports.restaurant_handler = function(event, context) {
    console.log('Restaurant Handler - Received Event:', JSON.stringify(event, null, 2));

    var date = event.date !== undefined ? new Date(event.date): new Date();
    date.setHours(0,0,0,0);

    if (date === undefined) {
        context.done({ "status": "error", "error": "Invalid data" });
        return;
    }

    get_restaurants(function(err, restaurants) {
      async.map(restaurants,
          function(restaurant, callback) {
              addChoice(date, restaurant.id, function(err, choice) {
                  callback(err, choice);
              });
          },
          function(err, choices) {
              context.done(null, { "status": "ok" });
      });
    });
};
