'use strict';
define([
  './load',
  './review'
], function(load, ReviewObj) {
  var filters = document.querySelector('.reviews-filter');
  var REVIEWS_LOAD_URL = 'http://localhost:1506/api/reviews';
  var dataReviews;
  var reviews = [];
  var reviewsContainer = document.querySelector('.reviews-list');

  load(REVIEWS_LOAD_URL, function(data) {
    dataReviews = data;
    dataReviews.forEach(function(element, id) {
      reviews[id] = new ReviewObj(element);
      reviewsContainer.appendChild(reviews[id].element);
    });
    filters.classList.remove('invisible');
  }, '__jsonpCallBack');
});
