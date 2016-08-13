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



/* Проверка на автозаполнение браузером форм */
(function checkInputs() {

  if (name.value != '') {

    button.disabled = true;
    controlName.classList.add('invisible');

  } else {

    button.disabled = false;
    controlName.classList.remove('invisible');

  }
  if (comment.value != '') {

    button.disabled = true;
    controlComment.classList.add('invisible');

  } else {

    button.disabled = false;
    controlComment.classList.remove('invisible');

  }
  if (name.value != '' && comment.value != '') {

    button.disabled = false;
    control.classList.add('invisible');

  } else {

    button.disabled = true;
    control.classList.remove('invisible');

  }
})()



name.onchange = function() {
  listenInputs();
}
comment.onchange = function() {
  listenInputs();
}
function listenInputs() {

  if (name.value != '') {

    button.disabled = true;
    controlName.classList.add('invisible');

  } else {

    button.disabled = false;
    controlName.classList.remove('invisible');

  }
  if (comment.value != '') {

    button.disabled = true;
    controlComment.classList.add('invisible');

  } else {

    button.disabled = false;
    controlComment.classList.remove('invisible');

  }
  if (name.value != '' && comment.value != '') {

    button.disabled = false;
    control.classList.add('invisible');

  } else {

    button.disabled = true;
    control.classList.remove('invisible');

  }
}


