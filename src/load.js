'use strict';
define(function() {
  return function(url, callback, callbackName) {
    window[callbackName] = function(data) {
      callback(data);
    };

    let script = document.createElement('script');
    script.src = url + '?callback=' + callbackName;
    document.body.appendChild(script);
  };
});
