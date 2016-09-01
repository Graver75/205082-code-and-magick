'use strict';
define(function() {
  return function () {
    var browserCookies = require('browser-cookies');
    window.form = (function() {
      var formContainer = document.querySelector('.overlay-container');
      var formCloseButton = document.querySelector('.review-form-close');

      var form = {
        onClose: null,

        /**
         * @param {Function} cb
         */
        open: function(cb) {
          formContainer.classList.remove('invisible');
          cb();
        },

        close: function() {
          formContainer.classList.add('invisible');

          if (typeof this.onClose === 'function') {
            this.onClose();
          }
        }
      };


      formCloseButton.onclick = function(evt) {
        evt.preventDefault();
        form.close();
      };

      return form;
    })();

    var expireDays = function() {

      var now = new Date();
      var grace = new Date(now.getFullYear(), 11, 9);
      var days;

      if (now.getTime() > grace.getTime()) {
        days = parseInt((now.getTime() - grace.getTime()) / 1000 / 60 / 60 / 24, 10);
      } else {
        grace.setFullYear(now.getFullYear() - 1);
        days = parseInt((now.getTime() - grace.getTime()) / 1000 / 60 / 60 / 24, 10);
      }
      return days;

    };
    var name = document.querySelector('#review-name');
    var comment = document.querySelector('#review-text');
    var button = document.querySelector('.review-form-control.review-submit');
    var control = document.querySelector('div.review-form-control.review-fields');
    var controlName = document.querySelector('label.review-fields-label.review-fields-name');
    var controlComment = document.querySelector('label.review-fields-label.review-fields-text');
    var mark1input = document.querySelector('#review-mark-1');
    var mark2input = document.querySelector('#review-mark-2');
    var mark3input = document.querySelector('#review-mark-3');
    var mark4input = document.querySelector('#review-mark-4');
    var mark5input = document.querySelector('#review-mark-5');
    var form = document.querySelector('.review-form');
    var mark = form['review-mark'];

    button.disabled = true;
    form.onsubmit = function() {

      browserCookies.set('review-name', name.value, {expires: expireDays()});
      browserCookies.set('review-mark', mark.value, {expires: expireDays()});

    };
    (function fillInputs() {

      if (browserCookies.get('review-name')) {
        name.value = browserCookies.get('review-name');
      }
      if (browserCookies.get('review-mark')) {
        mark.value = (browserCookies.get('review-mark'));
      }

    })();
//listenInputs(); // первичыный осмотр полей
    name.onchange = function() {
      listenInputs();
    };
    comment.onchange = function() {
      listenInputs();
    };
    mark1input.onchange = function() {
      listenInputs();
    };
    mark2input.onchange = function() {
      listenInputs();
    };
    mark3input.onchange = function() {
      listenInputs();
    };
    mark4input.onchange = function() {
      listenInputs();
    };
    mark5input.onchange = function() {
      listenInputs();
    };

    function listenInputs() {
      control.classList.add('invisible');
      controlName.classList.add('invisible');
      controlComment.classList.add('invisible');
      button.disabled = false;
      var nameValid = true;
      var commentValid = true;
      if (!name.value) {
        controlName.classList.remove('invisible');
        nameValid = false;
      }
      if (+mark.value < 3 && !comment.value) {
        controlComment.classList.remove('invisible');
        commentValid = false;
      }
      if (nameValid && commentValid) {
        control.classList.add('invisible');
      } else {
        control.classList.remove('invisible');
        button.disabled = true;
      }

    }
}});
