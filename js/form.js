import { validateForm } from './validation.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effect.js';
import { postPhoto } from './api.js';
import { successHandler, errorHandler } from './popups.js';
import { FILE_TYPES, SubmitButtonText, INVALID_FILE_FORMAT } from './constants.js';

const modal = document.querySelector('.img-upload__overlay');
const buttonClose = document.querySelector('.img-upload__cancel');
const imageUpload = document.querySelector('.img-upload__input');
const imagePreview = document.querySelector('.img-upload__preview img');
const form = document.querySelector('.img-upload__form');
const buttonSubmit = document.querySelector('.img-upload__submit');

const hideModal = () => {
  modal.classList.add('hidden');
  form.reset();
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', escModalHandler);
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (validateForm()) {
    buttonSubmit.textContent = SubmitButtonText.SENDING;
    buttonSubmit.disabled = true;
    postPhoto(new FormData(evt.target))
      .then((response) => {
        if (response.ok) {
          hideModal();
          successHandler();
        } else {
          document.removeEventListener('keydown', escModalHandler);
          errorHandler();
        }
      })
      .catch(() => {
        document.removeEventListener('keydown', escModalHandler);
        errorHandler();
      })
      .finally(() => {
        buttonSubmit.textContent = SubmitButtonText.IDLE;
        buttonSubmit.disabled = false;
      });
  }
});

function escModalHandler(evt) {
  const inputFocus = evt.target.classList.contains('text__hashtags') || evt.target.classList.contains('text__description');
  if (inputFocus) {
    return false;
  }
  if (evt.key === 'Escape') {
    hideModal();
  }
}

const showModal = () => {
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', escModalHandler);
};

buttonClose.addEventListener('click', () => {
  hideModal();
});

const openModalUpload = () => {
  showModal();
  const fileImage = imageUpload.files[0];
  const fileName = fileImage.name.toLowerCase();
  const matches = FILE_TYPES.some((item) => fileName.endsWith(item));
  if (matches) {
    imagePreview.src = URL.createObjectURL(fileImage);
  } else {
    imagePreview.src = '';
    imagePreview.alt = INVALID_FILE_FORMAT;
    imagePreview.style.backgroundColor = 'grey';
  }
  resetScale();
  resetEffects();
};

export { openModalUpload, escModalHandler };
