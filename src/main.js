'use strict';
var REVIEWS_LOAD_URL = 'http://localhost:1506/api/reviews';

define([
  './load'
], function(load) {
  load(REVIEWS_LOAD_URL, function(data) {
    load.arrReviews = data;
  }, '__jsonpCallBack');

});


(function() {
  var game = new window.Game(document.querySelector('.demo'));
  game.initializeLevelAndStart();
  game.setGameStatus(window.Game.Verdict.INTRO);

  var formOpenButton = document.querySelector('.reviews-controls-new');

  /** @param {MouseEvent} evt */
  formOpenButton.onclick = function(evt) {
    evt.preventDefault();

    window.form.open(function() {
      game.setGameStatus(window.Game.Verdict.PAUSE);
      game.setDeactivated(true);
    });
  };

  window.form.onClose = function() {
    game.setDeactivated(false);
  };
})();
