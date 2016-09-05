'use strict';
define([
  './game',
  './form',
  './gallery',
  './reviews'
], function(gameObj, FormObj, GalleryObj) {
  var GameConstructor = gameObj(); //неоднообразие, спасибо трэвису
  var game = new GameConstructor(document.querySelector('.demo'));

  var form = new FormObj();
  form.name.onchange = function() {
    form.validateForms();
  };
  form.comment.onchange = function() {
    form.validateForms();
  };
  form.mark1input.onchange = function() {
    form.validateForms();
  };
  form.mark2input.onchange = function() {
    form.validateForms();
  };
  form.mark3input.onchange = function() {
    form.validateForms();
  };
  form.mark4input.onchange = function() {
    form.validateForms();
  };
  form.mark5input.onchange = function() {
    form.validateForms();
  };

  var linksElements = document.querySelectorAll('.photogallery-image');
  var pictures = document.querySelectorAll('.gallery-image');
  var links = [];
  pictures.forEach(function(elem, i) {
    links[i] = elem.src;
  });
  var gallery = new GalleryObj(links);
  linksElements.forEach(function(elem, id, arr) {
    arr[id].onclick = function(event) {
      console.log(event);
      gallery.show(id + 1);
    };
  });

  game.initializeLevelAndStart();
  game.setGameStatus(GameConstructor.Verdict.INTRO);

  var formOpenButton = document.querySelector('.reviews-controls-new');

  /** @param {MouseEvent} evt */
  formOpenButton.onclick = function(evt) {
    evt.preventDefault();

    form.open(function() {
      game.setGameStatus(GameConstructor.Verdict.PAUSE);
      game.setDeactivated(true);
    });
  };

  form.onClose = function() {
    game.setDeactivated(false);
  };
});
