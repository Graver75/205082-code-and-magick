'use strict';
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
    days = parseInt(365 - (now.getTime() - grace.getTime()) / 1000 / 60 / 60 / 24, 10);
  } else {
    days = parseInt(365 - (grace.getTime() - now.getTime()) / 1000 / 60 / 60 / 24, 10);
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
var mark = document.getElementsByName('review-mark');

button.disabled = true;
button.onsubmit = function() {

  browserCookies.set('review-name', name.value, {expires: expireDays()});
  browserCookies.set('review-mark', findMarks(), {expires: expireDays()});

};
function findMarks() {

  for (var i = 0; i < mark.length - 1; i++) {
    if (mark[i].checked) {
      return String(mark[i].value);
    }
  }

}
(function fillInputs() {

  if (browserCookies.get('review-name') || browserCookies.get('review-mark')) {

    if (browserCookies.get('review-name')) {
      name.value = browserCookies.get('review-name');
    }
    if (browserCookies.get('review-mark')) {
      checkMark(browserCookies.get('review-mark'));
    }
  }

})();
function checkMark(value) {

  value = parseInt(value, 10);
  mark[value].checked = true;

}

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
  control.classList.remove('invisible');
  controlName.classList.remove('invisible');
  controlComment.classList.remove('invisible');
  button.disabled = true;

  if (mark3input.checked || mark4input.checked || mark5input.checked) {
    if (name.value) {

      controlComment.classList.add('invisible');
      control.classList.add('invisible');
      button.disabled = false;
      return;

    } else {
      controlComment.classList.add('invisible');
      return;
    }
  }

  if (name.value || comment.value) {

    if (name.value) {
      controlName.classList.add('invisible');
      if (mark3input.checked || mark4input.checked || mark5input.checked) {

        controlComment.classList.add('invisible');
        control.classList.add('invisible');
        button.disabled = false;
        return;

      }
      if (comment.value && (mark1input.checked || mark2input.checked)) {

        controlComment.classList.add('invisible');
        control.classList.add('invisible');
        button.disabled = false;
        return;

      }
    }
    if (comment.value) {
      controlComment.classList.add('invisible');
    }

  } else {

    if (!name.value || !comment.value) {

      if (!name.value) {
        name.classList.remove('invisible');
      }
      if (!comment.value) {
        comment.classList,remove('invisible');
      }

    }

  }

}
