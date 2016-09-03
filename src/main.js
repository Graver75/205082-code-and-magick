'use strict';
define([
  './game',
  './form',
  './gallery',
  './reviews'
], function(gameObj, form, GalleryObj) {
  var Game = gameObj();
  var game = new Game(document.querySelector('.demo'));
  var section = document.querySelector('.photogallery');
  var pictures = [
    section.childNodes[3].childNodes[0].src,
    section.childNodes[5].childNodes[0].src,
    section.childNodes[7].childNodes[0].src,
    section.childNodes[9].childNodes[0].src,
    section.childNodes[11].childNodes[0].src,
    section.childNodes[13].childNodes[0].src
  ];
  var gallery = new GalleryObj(pictures);
  var links = [
    section.childNodes[3],
    section.childNodes[5],
    section.childNodes[7],
    section.childNodes[9],
    section.childNodes[11],
    section.childNodes[13]
  ];
  links[0].onclick = function() {
    gallery.show(1);
  };
  links[1].onclick = function() {
    gallery.show(2);
  };
  links[2].onclick = function() {
    gallery.show(3);
  };
  links[3].onclick = function() {
    gallery.show(4);
  };
  links[4].onclick = function() {
    gallery.show(5);
  };
  links[5].onclick = function() {
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
