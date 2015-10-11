function get_restaurants(callback){
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
    var results = JSON.parse(body);
    results = results['businesses']
    var restaurants = []
    var choices = get_random_choices();
    for (var i = 0; i < choices.length; i++) {
      restaurants.push(results[choices[i]]['id'])
    }
    callback(null, restaurants);
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

function get_restaurant_info(id, callback) {
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
    url: 'https://api.yelp.com/v2/business/' + id,
    method: 'GET'
  };
  request({
    url: request_data.url,
    method: request_data.method,
    headers: oauth.toHeader(oauth.authorize(request_data, token))
  }, function(error, response, body) {
    var result = JSON.parse(body);
    var categories_json = result['categories']
    var categories = []
    for (var i = 0; i < categories_json.length; i++) {
      categories.push(categories_json[i][0])
    }
    var response = {
      'id' : result['id'],
      'name' : result['name'],
      'picture' : result['image_url'],
      'url' : result['url'],
      'tags' : categories
    }
    callback(null, response)
  });

}
