'use strict';
define(function() {
  return function(element) {
    var reviewsList = document.querySelector('.reviews-list');
    var filters = document.querySelector('.reviews-filter');
    var templateElement = document.querySelector('#review-template');
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

    reviewsList.appendChild(template);
  }
});
