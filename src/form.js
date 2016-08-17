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
var mark1input = document.querySelector('#review-mark-1');
var mark2input = document.querySelector('#review-mark-2');
var mark3input = document.querySelector('#review-mark-3');
var mark4input = document.querySelector('#review-mark-4');
var mark5input = document.querySelector('#review-mark-5');
/*Очистка полей автозаполнения браузера*/
mark5input.checked = true;
name.value = '';
comment.value = '';
button.disabled = true;
controlComment.classList.add('invisible');

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

function listenInputs(value) {
  control.classList.remove('invisible');
  controlName.classList.remove('invisible');
  controlComment.classList.remove('invisible');
  button.disabled = true;


  if (name.value) {

    controlName.classList.add('invisible');

  } else {

    controlName.classList.remove('invisible');

  }
  if (comment.value) {

    controlComment.classList.add('invisible');

  } else {

    controlComment.classList.remove('invisible');

  }

  if ((value >=3) && (mark2input.checked || mark1input.checked)) {

    if(name.value) {

      control.classList.add('invisible');
      button.disabled = false;
      return;

    } else {

      controlComment.classList.add('invisible');
      controlName.classList.remove('invisible');

    }

  }
  if ((value < 2 ) && (mark3input.checked || mark4input.checked || mark5input.checked)) {

    if(name.value) {

      controlName.classList.add('invisible');

    } else {

      controlComment.classList.remove('invisible');

    }
    if (comment.value) {

      controlComment.classList.add('invisible');

    } else {

      controlComment.classList.remove('invisible');

    }

    if (name.value && comment.value) {

      control.classList.add('invisible');
      button.disabled = false;
      return;

    }

  }

  if ((value < 2) && (mark3input.checked || mark4input.checked || mark5input.checked) && (!name.value || !comment.value)) {

    if(name.value) {

      controlName.classList.add('invisible');

    } else {

      controlComment.classList.remove('invisible');

    }
    if (comment.value) {

      controlComment.classList.add('invisible');

    } else {

      controlComment.classList.remove('invisible');

    }
    if (!comment.value && !name.value) {

      control.classList.remove('invisible');
      controlName.classList.remove('invisible');
      controlComment.classList.remove('invisible');

    }

  }

  if (((value >= 3) || (mark3input.checked || mark4input.checked || mark5input.checked)) && name.value) {

    if (value < 3 && !comment.value) {

      controlComment.classList.remove('invisible');
      return;

    }

    control.classList.add('invisible');
    button.disabled = false;
    return;

  }

  if (((value < 2) || (mark1input.checked || mark2input.checked || mark3input.checked)) && name.value && comment.value) {

    control.classList.add('invisible');
    button.disabled = false;
    return;

  }

  if ((value >= 3) &&(mark3input.checked || mark4input.checked || mark5input.checked) && !name.value) {

    controlComment.classList.add('invisible');

  }

  if ((value < 3) && (mark3input.checked || mark4input.checked || mark5input.checked) && name.value && !comment.value) {

    controlComment.classList.remove('invisible');
    controlName.classList.add('invisible');

  }

}
