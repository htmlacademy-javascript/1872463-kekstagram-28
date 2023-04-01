import {validateForm} from './validation.js';
import {resetScale} from './scale.js';
import {resetEffects} from './effect.js';

const modal = document.querySelector('.img-upload__overlay');
const buttonClose = document.querySelector('.img-upload__cancel');
const imageUpload = document.querySelector('.img-upload__input');
const imagePreview = document.querySelector('.img-upload__preview img');
const form = document.querySelector('.img-upload__form');

form.addEventListener('submit', (evt) => {
  if (!validateForm()) {
    evt.preventDefault();
  }
});

const showModal = () => {
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const hideModal = () => {
  modal.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

buttonClose.addEventListener('click', () => {
  hideModal();
});

const openModalUpload = () => {
  showModal();
  const fileImage = imageUpload.files[0];
  imagePreview.src = URL.createObjectURL(fileImage);
  resetScale();
  resetEffects();
};

export {openModalUpload};
