'use strict';

var REVIEWS_LOAD_URL = 'http://localhost:1506/api/reviews';
var reviews;

var load = function(url, callback) {
  window[callback] = function(data) {
    console.log(data);
  };

  var script = document.createElement('script');
  script.src = url + '?callback=' + callback;
  document.body.appendChild(script);
};

load(REVIEWS_LOAD_URL, '__jsonpCallback');
console.log(reviews);


