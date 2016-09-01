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
  }, '__jsonpCallBack');

  dataReviews = dataReviews.map(function(dataReview) {
    review(dataReview);
  });
  dataReviews.forEach(function(elem) {
    reviewsList.appendChild(elem);
  });
  filters.classList.remove('invisible');
  return dataReviews;
});



