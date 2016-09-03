'use strict';
Gallery.prototype.show = function(number) {
  this.galleryElement.classList.remove('invisible');
  this.addListeners();
  this.setActivePicture(number);
};
Gallery.prototype.hide = function() {
  this.galleryElement.classList.add('invisible');

};

define(function() {
  return function(pictures) {
    var galleryElement = document.querySelector('.overlay-gallery');
    var controlLeftElement = document.querySelector('.overlay-gallery-control-left');
    var controlRightElement = document.querySelector('.overlay-gallery-control-right');
    var currentNumberElement = document.querySelector('.preview-number-current');
    var totalNumberElement = document.querySelector('.preview-number-total');
    var closeButtonElement = document.querySelector('.overlay-gallery-close');
    var previewGalleryElement = document.querySelector('.overlay-gallery-preview');
    var self = this;
    var TOTAL_PICTURES = pictures.length;

    this.pictures = pictures;
    this.activePicture = 1;

    this.setActivePicture = function(number) {
      this.activePicture = number;
      currentNumberElement.innerText = number;

      var img = new Image();

      img.onerror = function() {
        console.log("Error loading image in gallery");
      }

      img.src = this.pictures[number - 1];

      if (previewGalleryElement.document.querySelector('img')) {
        previewGalleryElement.replaceChild(img, previewGalleryElement.document.querySelector('img'));
      }
      previewGalleryElement.appendChild(img);
    };

    this.addListeners = function() {
      self.controlRightElement.onclick = function() {
        if(activePicture < TOTAL_PICTURES) {
          activePicture++;
          setActivePicture(activePicture);
        }
      };

      self.controlLeftElement.onclick = function() {
        if(activePicture !== 1) {
          activePicture--;
          setActivePicture(activePicture);
        }
      };
      self.closeButtonElement.onclick = function() {
        hide();
      };
    };
    this.removeListeners = function() {
      self.controlRightElement.onclick = null;
      self.controlLeftElement.onclick = null;
      self.closeButtonElement.onclick = null;
    };
  };
});
