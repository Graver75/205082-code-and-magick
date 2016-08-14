'use strict';

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


button.setAttribute('disabled', 'disabled');


name.onchange = function() {
  listenInputs();
}
comment.onchange = function() {
  listenInputs();
}
mark1.onclick = function () {
  listenInputs(1);
}
mark2.onclick = function() {
  listenInputs(2);
}
mark3.onclick = function () {
  listenInputs(3);
}
mark4.onclick = function() {
  listenInputs(4);
}
mark5.onclick = function() {
  listenInputs(5);
}


function listenInputs(number) {

  if (number < 3) {

    if (name.value != '') {

      controlName.classList.add('invisible');
      button.disabled = true;

    } else {

      controlName.classList.remove('invisible');

    }

    if (comment.value != '') {

      controlComment.classList.add('invisible');
      button.disabled = true;

    } else {

      controlComment.classList.remove('invisible');

    }

    if (name.value != '' && comment.value != '') {

      control.classList.add('invisible');
      button.disabled = false;

    } else {

      control.classList.remove('invisible');
      button.disabled = true;

    }

  } else {

    if (name.value != '') {

      control.classList.add('invisible');
      button.disabled = false;

    } else {

      control.classList.remove('invisible');
      controlComment.classList.add('invisible');
      controlName.classList.remove('invisible');

    }

  }

}


