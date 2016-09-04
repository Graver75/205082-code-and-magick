'use strict';
define([
  './game',
  './form',
  './gallery',
  './reviews'
], function(GameObj, FormObj, GalleryObj) {
  var Game = GameObj();
  var game = new Game(document.querySelector('.demo'));

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

  linksElements[0].onclick = function() {
    gallery.show(1);
  };
  linksElements[1].onclick = function() {
    gallery.show(2);
  };
  linksElements[2].onclick = function() {
    gallery.show(3);
  };
  linksElements[3].onclick = function() {
    gallery.show(4);
  };
  linksElements[4].onclick = function() {
    gallery.show(5);
  };
  linksElements[5].onclick = function() {
    gallery.show(6);
  };

  game.initializeLevelAndStart();
  game.setGameStatus(Game.Verdict.INTRO);

  var formOpenButton = document.querySelector('.reviews-controls-new');

  /** @param {MouseEvent} evt */
  formOpenButton.onclick = function(evt) {
    evt.preventDefault();

    form.open(function() {
      game.setGameStatus(Game.Verdict.PAUSE);
      game.setDeactivated(true);
    });
  };

  form.onClose = function() {
    game.setDeactivated(false);
  };
});
