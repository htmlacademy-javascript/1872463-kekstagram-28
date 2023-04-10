import { escModalHandler } from './form.js';
import { isEscapeKey } from './utils.js';

const successTemlate = document.querySelector('#success').content.querySelector('.success');
const successPopup = successTemlate.cloneNode(true);
const errorTemlate = document.querySelector('#error').content.querySelector('.error');
const errorPopup = errorTemlate.cloneNode(true);

const closePopup = (popup, handler) => {
  document.querySelector(popup).remove();
  document.removeEventListener('keydown', handler);
  if (popup === '.error') {
    document.addEventListener('keydown', escModalHandler);

  }
};

const escSuccessHandler = (evt) => {
  if (isEscapeKey(evt.key)) {
    closePopup('.success', escSuccessHandler);
  }
};

const escErrorHandler = (evt) => {
  if (isEscapeKey(evt.key)) {
    closePopup('.error', escErrorHandler);
  }
};

const successHandler = () => {
  document.body.append(successPopup);
  successPopup.querySelector('.success__button').addEventListener('click', () => {
    closePopup('.success', escSuccessHandler);
  });
  document.addEventListener('keydown', escSuccessHandler);
};

const errorHandler = () => {
  document.body.append(errorPopup);
  errorPopup.querySelector('.error__button').addEventListener('click', () => {
    closePopup('.error', escErrorHandler);
  });
  document.addEventListener('keydown', escErrorHandler);
};

export { successHandler, errorHandler };
