'use strict';
var reviewsList = document.querySelector('.reviews-list');

define([
  './load',
  './review'
], function(load, review) {
  var data = load;
  data = data.map(function(dataReview) {
      review(dataReview);
    });
  data.forEach(function(elem) {
    reviewsList.appendChild(elem);
  });
  return data;
});

filters.classList.remove('invisible');

