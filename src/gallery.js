'use strict';

define(function() {
  let Gallery = function(pictures) {
    this.pictures = pictures;
    this.activePicture = 1;

    let galleryElement = document.querySelector('.overlay-gallery'),
        controlLeftElement = document.querySelector('.overlay-gallery-control-left'),
        controlRightElement = document.querySelector('.overlay-gallery-control-right'),
        currentNumberElement = document.querySelector('.preview-number-current'),
        totalNumberElement = document.querySelector('.preview-number-total'),
        closeButtonElement = document.querySelector('.overlay-gallery-close'),
        previewGalleryElement = document.querySelector('.overlay-gallery-preview'),
        self = this,
        TOTAL_PICTURES = pictures.length,
        addListeners = function() {
      controlRightElement.onclick = function() {
        if (this.activePicture < TOTAL_PICTURES) {
          this.activePicture++;
          this.setActivePicture(this.activePicture);
        }
      };
      controlLeftElement.onclick = function() {
        if (this.activePicture !== 1) {
          this.activePicture--;
          this.setActivePicture(this.activePicture);
        }
      };
      closeButtonElement.onclick = function() {
        this.hide();
      };
    };
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

      let img = new Image();
      img.onerror = function() {
        console.log('Error loading image in gallery');
      };
      img.src = this.pictures[number - 1];
      if (previewGalleryElement.querySelector('img')) {
        previewGalleryElement.replaceChild(img, previewGalleryElement.querySelector('img'));
      }

      previewGalleryElement.appendChild(img);
    };
    Gallery.prototype.addListeners = addListeners.bind(this);
    Gallery.prototype.removeListeners = function() {
      controlRightElement.onclick = null;
      controlLeftElement.onclick = null;
      closeButtonElement.onclick = null;
    };
  };
  return Gallery;
});
