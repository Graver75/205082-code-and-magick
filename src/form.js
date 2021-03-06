'use strict';
define(function() {
  let Form = function() {
    this.onClose = null;

    this.browserCookies = require('browser-cookies');
    this.formContainer = document.querySelector('.overlay-container');
    this.formCloseButton = document.querySelector('.review-form-close');
    this.name = document.querySelector('#review-name');
    this.comment = document.querySelector('#review-text');
    this.button = document.querySelector('.review-form-control.review-submit');
    this.control = document.querySelector('div.review-form-control.review-fields');
    this.controlName = document.querySelector('label.review-fields-label.review-fields-name');
    this.controlComment = document.querySelector('label.review-fields-label.review-fields-text');
    this.forms = document.querySelector('.review-form');
    this.mark = this.forms['review-mark'];
    this.button.disabled = true;
    let self = this;

    /**
     * @param {Function} cb
     */
    this.open = function(cb) {
      this.formContainer.classList.remove('invisible');
      cb();
    };
    this.close = function() {
      this.formContainer.classList.add('invisible');

      if (typeof this.onClose === 'function') {
        this.onClose();
      }
    };
    this.getExpireDays = function() {
      let now = new Date(),
          grace = new Date(now.getFullYear(), 11, 9),
          days;
      if (now.getTime() > grace.getTime()) {
        days = parseInt((now.getTime() - grace.getTime()) / 1000 / 60 / 60 / 24, 10);
      } else {
        grace.setFullYear(now.getFullYear() - 1);
        days = parseInt((now.getTime() - grace.getTime()) / 1000 / 60 / 60 / 24, 10);
      }
      return days;
    };
    this.validateForms = function() {
      this.control.classList.add('invisible');
      this.controlName.classList.add('invisible');
      this.controlComment.classList.add('invisible');
      this.button.disabled = false;
      let nameValid = true,
          commentValid = true;
      if (!this.name.value) {
        this.controlName.classList.remove('invisible');
        nameValid = false;
      }
      if (+this.mark.value < 3 && !this.comment.value) {
        this.controlComment.classList.remove('invisible');
        commentValid = false;
      }
      if (nameValid && commentValid) {
        this.control.classList.add('invisible');
      } else {
        this.control.classList.remove('invisible');
        this.button.disabled = true;
      }
    };
    this.setCookie = function() {
      this.browserCookies.set('review-name', this.name.value, {expires: this.getExpireDays()});
      this.browserCookies.set('review-mark', this.mark.value, {expires: this.getExpireDays()});
    };
    this.getCookie = function() {
      if (this.browserCookies.get('review-name')) {
        this.name.value = this.browserCookies.get('review-name');
      }
      if (this.browserCookies.get('review-mark')) {
        this.mark.value = (this.browserCookies.get('review-mark'));
      }
    };
    this.formCloseButton.onclick = function(evt) {
      evt.preventDefault();
      self.close();
    };
  };
  return Form;
});
