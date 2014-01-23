var FeedParser = require('feedparser'),
  request = require('request');
var feedUrl = "http://rss.thepiratebay.se/601";
var feed = request(feedUrl).pipe(new FeedParser([]));
var feeds = [];
var meta_data = [];
var feed_data = [];
process.setMaxListeners(100000);

function parseDate(date) {
  return date.toString().match('([A-z 0-9])+:([0-9])+')[0];
}

function sort(arr) {
  var results = [];
  for (var i = 0; i < arr.length; i++) {
    results[arr[i]] = null;
  }
    return Object.keys(results);
}

function metaHandler(meta){
  var feed_meta_data = {};
  feed_meta_data.title = meta.title;
  feed_meta_data.pubdate = parseDate(meta.pubdate);
  //console.log(feed)
}

function dataHandler(data){
  var feed_data = {};
  feed_data.data = data
  console.log(data)
}

// Handle Errors
feed.on('error', function(error) {
  console.log(error);
});

// Handle meta event
feed.on('meta', function(meta) {
  pubdate = parseDate(meta.pubdate);
  now = parseDate(Date());
  //metaHandler(meta)
});

feed.on('data', function(data) {
  dataHandler(data)
});
