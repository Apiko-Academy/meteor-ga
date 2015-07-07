# Google Analytics

It's a wrapper for Node [googleanalytics](https://github.com/ncb000gt/node-googleanalytics) package.


# Description

Pull data from Google Analytics for use in projects.

The library maintains tracking of the token so that you don't have to and will push the token around with your requests.
Should you require a different token, just create a new GA instance. However, this is asynchronous through eventing so if you do want the token you can latch onto the event.


# Usage

With a user and password:

```javascript
var ga = new GAnalytics.GA({
  user: 'myusername',
  password: 'mypassword'
});

ga.login(function(err, token) {
  var options = {
    'ids': 'ga:<profileid>',
    'start-date': '2010-09-01',
    'end-date': '2010-09-30',
    'dimensions': 'ga:pagePath',
    'metrics': 'ga:pageviews',
    'sort': '-ga:pagePath'
  };

  ga.get(options, function(err, entries) {
   console.log(JSON.stringify(entries));
  });
});
```

If you have already gotten permission from a user, you can simply use the oAuth access token you have:

var ga = new GAnalytics.GA({
  token: 'XXXXXXXXXXXX'
});

var options = {
 'ids': 'ga:<profileid>',
  'start-date': '2010-09-01',
  'end-date': '2010-09-30',
  'dimensions': 'ga:pagePath',
  'metrics': 'ga:pageviews',
  'sort': '-ga:pagePath'
};

 ga.get(options, function(err, entries) {
  console.log.debug(JSON.stringify(entries));
});

You can specify the type of token by setting 'tokenType', default is 'Bearer'.

See [node-gapitoken](https://github.com/bsphere/node-gapitoken) for easy service account Server to Server authorization flow.

# License

This project is under MIT license.
