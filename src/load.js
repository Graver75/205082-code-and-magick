'use strict';

var arrReviews;

var load = function(url, callback, callbackName) {
  window[callbackName] = function(data) {
    callback(data);
  };

  var script = document.createElement('script');
  script.src = url + '?callback=' + callbackName;
  document.body.appendChild(script);
  window[callbackName](arrReviews);
};

define(function () {
  return load;
});


