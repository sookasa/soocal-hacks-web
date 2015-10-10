console.log('Loading function');

exports.handler = function(event, context) {
    console.log('Received event:', JSON.stringify(event, null, 2));

    var operation = event.operation;
    delete event.operation;
    context.done(null, 'pong ' + operation);
};
