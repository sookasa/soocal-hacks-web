console.log('Loading function');

exports.handler = function(event, context) {
  var request = require('request')
  var OAuth   = require('oauth-1.0a');
  var oauth = OAuth({
      consumer: {
          public: 'C-p_NdWQjNz4bz2MSEdFcA',
          secret: 'XpkT-QL5nYDVbiJnk5nfOhNcQHM'
      },
      signature_method: 'HMAC-SHA1'
  });
  var token = {
    public: 'y7MLnPCL1ayG2YOUZ6L72y4Nh3SMzscm',
    secret: 'WIY2ti50EgzqnlUsyEXze-6VD-Y'
  };
  var request_data = {
    url: 'https://api.yelp.com/v2/search/?term=Restaurants&location=906 S Claremont St, San Mateo, CA&limit=20&radius_filter=1500',
    method: 'GET'
  };
  request({
    url: request_data.url,
    method: request_data.method,
    headers: oauth.toHeader(oauth.authorize(request_data, token))
  }, function(error, response, body) {
      results = JSON.parse(body)
      context.done(null, results['businesses']);
  });
};
