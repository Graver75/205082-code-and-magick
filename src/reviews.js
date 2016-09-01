'use strict';
define([
  './load',
  './review'
], function(load, review) {
  var reviewsList = document.querySelector('.reviews-list');
  var filters = document.querySelector('.reviews-filter');
  var REVIEWS_LOAD_URL = 'http://localhost:1506/api/reviews';
  var dataReviews;

  load(REVIEWS_LOAD_URL, function(data) {
    dataReviews = data;
    console.log(dataReviews);

    dataReviews.forEach(function(element) {
      review(element);
    });
    filters.classList.remove('invisible');
  }, '__jsonpCallBack');
});
