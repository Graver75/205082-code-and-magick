'use strict';

var templateElement = document.querySelector('#review-template');
var reviewsList = document.querySelector('.reviews-list');
var REVIEWS_LOAD_URL = 'http://localhost:1506/api/reviews';
var reviews;
var filters = document.querySelector('reviews-filter');

var load = function(url, callback, callbackName) {
  window[callbackName] = function(data) {
    callback(data);
  };

  var script = document.createElement('script');
  script.src = url + '?callback=' + callbackName;
  document.body.appendChild(script);
};

load(REVIEWS_LOAD_URL, function(data) {
  reviews = data;
  console.log(reviews);
  reviews.forEach(function (element) {
    showReviews.placing(element);
  });
}, '__jsonpCallback');

var showReviews  = {
  getclone: function () {
    var tmpl = templateElement.cloneNode(true);
    tmpl = tmpl.content.querySelector('.review');
    return tmpl;
  },
  placing: function(element) {
    var tmpl = this.getclone();
    console.dir(tmpl);
    tmpl.querySelector('.review-text').textContent = element.description;
    tmpl.querySelector('.review-rating').style.width = 40 * element.rating + 'px';
    tmpl.querySelector('.review-rating').style.maxWidth = '200px';

    var img = new Image(124, 124);
    img.onload = function () {
      tmpl.querySelector('.review-author').src = element.author.picture;
    };
    img.onerror = function () {
      console.log('Error loading img ' + img.src);
      tmpl.querySelector('.review-author').classList.add('review-load-failure');
    }
    img.src = element.author.picture;
    console.dir(img);

    reviewsList.appendChild(tmpl);
  }
};
