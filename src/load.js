'use strict';

var REVIEWS_LOAD_URL = 'http://localhost:1506/api/reviews';
var arrReviews;

var load = function(url, callback, callbackName) {
  window[callbackName] = function(data) {
    callback(data);
  };

  var script = document.createElement('script');
  script.src = url + '?callback=' + callbackName;
  document.body.appendChild(script);
};

define(function() {
  load(REVIEWS_LOAD_URL, function(data) {
    arrReviews = data;
  }, '__jsonpCallback');
  console.dir(arrReviews);
  return arrReviews;
});
