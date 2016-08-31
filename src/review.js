'use strict';

var templateElement = document.querySelector('#review-template');
var filters = document.querySelector('.reviews-filter');

function drawReviews(element) {
  filters.classList.add('invisible');

  var template = templateElement.cloneNode(true);
  template = template.content.querySelector('.review');
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
}

define(function() {
  return drawReviews;
});
