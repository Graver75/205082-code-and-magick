'use strict';
define([
  './game', './form', './gallery', './reviews'
], function(gameObj, form, gallery, reviews) {
  var Game = gameObj();
  var game = new Game(document.querySelector('.demo'));
  var galleryContainer = document.querySelector('.main-section.photogallery');
  var pictures = galleryContainer['img'];
  var Gallery = gallery();
  var gallery = new Gallery()

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
