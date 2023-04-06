import {renderPictures} from './pictures.js';
import {openModalUpload} from './form.js';
import {getPhotos} from './api.js';

const fileInput = document.querySelector('.img-upload__input');

getPhotos().then((photos) => {
  renderPictures(photos);
});

fileInput.addEventListener('change', () => {
  openModalUpload();
});
