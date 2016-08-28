'use strict';

var REVIEWS_LOAD_URL = 'http://localhost:1506/api/reviews';
var reviews;

var load = function(url, callback, callbackName) {
  if (!callbackName) {
    callbackName = 'cb' + Date.now();
  }
  window[callbackName] = function(data) {
    callback(data);
  };

  var script = document.createElement('script');
  script.src = url + '?callback=' + callbackName;
  document.body.appendChild(script);
};

load(REVIEWS_LOAD_URL, function(data) {
  reviews = data;
}, '__jsonpCallback');
