console.log('Loading function');

exports.handler = function(event, context) {
    console.log('Received event:', JSON.stringify(event, null, 2));
    addChoice(new Date(2015,10,10), "test3", function(err, result) {
        context.done(null, 'pong: ' + JSON.stringify(result));
    });
};
