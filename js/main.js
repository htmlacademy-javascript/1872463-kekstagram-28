import { openModalUpload } from './form.js';
import { getPhotos } from './api.js';
import { loadFilters } from './filters.js';
import { showAlert } from './utils.js';
import { ALERT_TEXT } from './constants.js';

const fileInput = document.querySelector('.img-upload__input');

getPhotos()

  .then((photos) => {
    loadFilters(photos);
  })
  .catch(() => {
    showAlert(ALERT_TEXT);
  });

fileInput.addEventListener('change', () => {
  openModalUpload();
});
