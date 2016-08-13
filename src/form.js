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

button.setAttribute('disabled', 'disabled');

name.onchange = function() {
  listenForms();
}
comment.onchange = function() {
  listenForms();
}
function listenForms() {

  if (name.value != '') {
    controlName.classList.add('invisible');
  }
  if (comment.value != '') {
    controlComment.classList.add('invisible');
  }

  if (name.value != '' && comment.value != '') {

    button.disabled = false;
    control.classList.add('invisible');

  }
}

