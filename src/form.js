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
var mark1 = document.querySelector('.review-mark-label-1');
var mark2 = document.querySelector('.review-mark-label-2');
var mark3 = document.querySelector('.review-mark-label-3');
var mark4 = document.querySelector('.review-mark-label-4');
var mark5 = document.querySelector('.review-mark-label-5');
var mark1input = document.querySelector('#review-mark-1');
var mark2input = document.querySelector('#review-mark-2');
var mark3input = document.querySelector('#review-mark-3');
var mark4input = document.querySelector('#review-mark-4');
var mark5input = document.querySelector('#review-mark-5');
/*Заполнение полей*/
name.value = browserCookies.get('review-name');
var cookieMark = browserCookies.get('review-mark');

if (cookieMark !== null) {

  if (cookieMark === '1') {

    mark1input.checked = true;
    controlComment.classList.remove('invisible');

    if (!name.value) {

      controlName.classList.remove('invisible');

    } else {

      controlName.classList.add('invisible');

    }

  }

  if (cookieMark === '2') {

    mark2input.checked = true;
    controlComment.classList.remove('invisible');

    if (!name.value) {

      controlName.classList.remove('invisible');

    } else {

      controlName.classList.add('invisible');

    }

  }

  if (cookieMark === '3') {

    mark3input.checked = true;

    if (name.value) {

      button.disabled = false;
      control.classList.add('invisible');

    }

  }

  if (cookieMark === '4') {

    mark4input.checked = true;

    if (name.value) {

      button.disabled = false;
      control.classList.add('invisible');

    }

  }

  if (cookieMark === '5') {

    mark5input.checked = true;

    if (name.value) {

      button.disabled = false;
      control.classList.add('invisible');

    }

  }

}

if (mark3input.checked) {

  controlComment.classList.add('invisible');

}

if (mark4input.checked) {

  controlComment.classList.add('invisible');

}

if (mark5input.checked) {

  controlComment.classList.add('invisible');

}


name.onchange = function() {
  listenInputs();
};
comment.onchange = function() {
  listenInputs();
};

mark1.onclick = function() {
  listenInputs(1);
};

mark2.onclick = function() {
  listenInputs(2);
};

mark3.onclick = function() {
  listenInputs(3);
};

mark4.onclick = function() {
  listenInputs(4);
};

mark5.onclick = function() {
  listenInputs(5);
};
button.onsubmit = function() {

  browserCookies.set('review-name', name.value, {expires: expireDays()});
  browserCookies.set('review-mark', findMark(), {expires: expireDays()});

};

function findMark() {

  var mark = document.getElementsByName('review-mark');

}

function listenInputs(value) {

  button.disabled = false;

  if (name.value || comment.value) {

    button.disabled = true;

    if (name.value) controlName.classList.add('invisible');
    if (comment.value) controlComment.classList.add('invisible');

  } else {

    button.disabled = true;

    if (!name.value) controlName.classList.remove('invisible');
    if (!comment.value) controlComment.classList.remove('invisible');

  }

  if ( (value >= 3) && name.value && comment.value) {

    button.disabled = false;
    control.classList.add('invisible');

    return;

  } else {

    button.disabled = true;
    control.classList.remove('invisible');

  }
  if ( (value >= 3) && !name.value && !comment.value) {

    button.disabled = true;
    control.classList.remove('invisible');
    controlComment.classList.add('invisible');
    controlName.classList.remove('invisible');

  }
  if ( (value < 3) && name.value && comment.value) {

    control.classList.add('invisible');
    button.disabled = false;

    return;

  } else {

    control.classList.remove('invisible');
    button.disabled = true;

  }
  if ( (value >= 3) && name.value) {

    control.classList.add('invisible');
    button.disabled = false;

    return;

  } else {

    control.classList.remove('invisible');
    button.disabled = true;

  }

  if (name.value && !comment.value && (mark3input.checked || mark4input.checked || mark5input.checked || value >= 3 )) { //cookies?

    if(value < 3) {

      return;

    }

    controlComment.classList.remove('invisible');
    controlName.classList.add('invisible');
    control.classList.add('invisible');

    button.disabled = false;
    return;

  }
  if (controlName.classList.contains('invisible') && controlComment.classList.contains('invisible')) {

    control.classList.add('invisible');
    button.disabled = false;

  }

}
