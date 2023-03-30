import {getPhotos} from './data.js'; // из модуля data.js импортируется переменная (функция) getPhotos
import {PICTURE_COUNT} from './constants.js';
import {renderPictures} from './pictures.js';
import {openModalUpload} from './form.js';

const fileInput = document.querySelector('.img-upload__input');

renderPictures(getPhotos(PICTURE_COUNT));

fileInput.addEventListener('change', () => {
  openModalUpload();
});
