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

    dataReviews = dataReviews.map(function(element) {
      review(element);
    });
  }, '__jsonpCallBack');

  filters.classList.remove('invisible');
  return dataReviews;
});



