'use strict';

var templateElement = document.querySelector('#review-template');
var reviewsList = document.querySelector('.reviews-list');
var REVIEWS_LOAD_URL = 'http://localhost:1506/api/reviews';
var reviews;
var filters = document.querySelector('.reviews-filter');

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
  reviews.forEach(function(element) {
    showReviews.placing(element);
  });
}, '__jsonpCallback');

var showReviews = {
  getclone: function() {
    var template = templateElement.cloneNode(true);
    template = template.content.querySelector('.review');
    return template;
  },
  placing: function(element) {
    filters.classList.add('invisible');
    var template = this.getclone();
    console.dir(template);
    template.querySelector('.review-text').textContent = element.description;
    var rating = template.querySelector('.review-rating');
    rating.style.width = 40 * element.rating + 'px';
    rating.style.maxWidth = '200px';

    var img = new Image(124, 124);
    img.onload = function() {
      template.querySelector('.review-author').src = element.author.picture;
    };
    img.onerror = function() {
      console.log('Error loading img ' + img.src);
      template.querySelector('.review-author').classList.add('review-load-failure');
    };
    img.src = element.author.picture;
    console.dir(img);

    reviewsList.appendChild(template);
  }
};
filters.classList.remove('invisible');
