'use strict';
define(function() {
  let Review = function(data) {
    Review.prototype.getElements = function() {
      this.element = reviewClone.cloneNode(true);
      this.description = this.element.querySelector('.review-text');
      this.image = this.element.querySelector('.review-author');
      this.rating = this.element.querySelector('.review-rating');
      this.quizAnswerYes = this.element.querySelector('.review-quiz-answer-yes');
      this.quizAnswerNo = this.element.querySelector('.review-quiz-answer-no');
    };
    Review.prototype.setRating = function() {
      this.rating.style.width = 40 * data.rating + 'px';
      this.rating.style.maxWidth = '200px';
    };
    Review.prototype.setImage = function() {
      function isOk(isLoad) {
        if (isLoad) {
          this.image.src = this.data.author.picture;
          this.image.width = this.image.height = this.IMAGE_SIZE;
        } else {
          this.image.src = '';
          this.element.classList.add(this.LOAD_FAILURE);
        }
      }
      this.loadImage(this.data.author.picture, isOk.bind(this));
    };
    Review.prototype.remove = function() {
      this.quizAnswerYes.removeEventListener('click', this.setAnswerYes);
      this.quizAnswerNo.removeEventListener('click', this.setAnswerNo);
    };
    Review.prototype.setAnswer = function(isYes) {
      this.quizAnswerYes.classList.toggle(this.ACTIVE_ANSWER, isYes);
      this.quizAnswerNo.classList.toggle(this.ACTIVE_ANSWER, !isYes);
    };
    Review.prototype.loadImage = function(url, callBack) {
      let image = new Image();
      image.onload = function() {
        callBack(true);
      };
      image.onerror = function() {
        callBack(false);
      };
      image.src = url;
    };
    Review.prototype.IMAGE_SIZE = '124px';
    Review.prototype.LOAD_FAILURE = 'review-load-failure';
    Review.prototype.ACTIVE_ANSWER = 'review-quiz-answer-active';

    let reviewTemplate = document.getElementById('review-template'),
        reviewClone = reviewTemplate.content.querySelector('.review');
    this.data = data;

    this.getElements();

    this.setAnswerYes = this.setAnswer.bind(this, true);
    this.setAnswerNo = this.setAnswer.bind(this, false);

    this.description.textContent = this.data.description;
    this.setRating(this.data.rating);
    this.setImage();

    this.quizAnswerYes.addEventListener('click', this.setAnswerYes);
    this.quizAnswerNo.addEventListener('click', this.setAnswerNo);

  };
  return Review;
});
