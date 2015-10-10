function get_restaurants(){
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
    url: 'https://api.yelp.com/v2/search/?term=Restaurants&sort=2&location=906 S Claremont St, San Mateo, CA&limit=50&radius_filter=1500',
    method: 'GET'
  };
  request({
    url: request_data.url,
    method: request_data.method,
    headers: oauth.toHeader(oauth.authorize(request_data, token))
  }, function(error, response, body) {
    results = JSON.parse(body);
    var choices = get_random_choices();
    var date = ''
  });
};

function get_random_choices() {
  var total_choices = 50;
  var results = Array.apply(null, {length: total_choices}).map(Number.call, Number);
  for (var i = 0; i < results.length; i++) {
    choice = Math.floor(Math.random() * total_choices) + i
    var temp = results[i];
    results[i] = results[choice];
    results[choice] = temp;
  }
  return results.slice(0, 4);
}