'use strict';

define(function() {
  var Gallery = function(pictures) {
    this.pictures = pictures;
    this.activePicture = 1;

    var galleryElement = document.querySelector('.overlay-gallery');
    var controlLeftElement = document.querySelector('.overlay-gallery-control-left');
    var controlRightElement = document.querySelector('.overlay-gallery-control-right');
    var currentNumberElement = document.querySelector('.preview-number-current');
    var totalNumberElement = document.querySelector('.preview-number-total');
    var closeButtonElement = document.querySelector('.overlay-gallery-close');
    var previewGalleryElement = document.querySelector('.overlay-gallery-preview');
    var self = this;
    var TOTAL_PICTURES = pictures.length;
    totalNumberElement.innerText = TOTAL_PICTURES;

    Gallery.prototype.show = function(number) {
      galleryElement.classList.remove('invisible');
      this.addListeners();
      this.setActivePicture(number);
    };
    Gallery.prototype.hide = function() {
      galleryElement.classList.add('invisible');
      this.removeListeners();
    };
    Gallery.prototype.setActivePicture = function(number) {
      this.activePicture = number;
      currentNumberElement.innerText = number;

      var img = new Image();
      img.onerror = function() {
        console.log('Error loading image in gallery');
      };
      img.src = this.pictures[number - 1];
      if (previewGalleryElement.querySelector('img')) {
        previewGalleryElement.replaceChild(img, previewGalleryElement.querySelector('img'));
      }

      previewGalleryElement.appendChild(img);
    };
    Gallery.prototype.addListeners = function() {
      controlRightElement.onclick = function() {
        if (self.activePicture < TOTAL_PICTURES) {
          self.activePicture++;
          self.setActivePicture(self.activePicture);
        }
      };
      controlLeftElement.onclick = function() {
        if (self.activePicture !== 1) {
          self.activePicture--;
          self.setActivePicture(self.activePicture);
        }
      };
      closeButtonElement.onclick = function() {
        self.hide();
      };
    };
    Gallery.prototype.removeListeners = function() {
      controlRightElement.onclick = null;
      controlLeftElement.onclick = null;
      closeButtonElement.onclick = null;
    };
  };
  return Gallery;
});
