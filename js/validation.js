import {checkLength} from './utils.js';
import {MAX_LENGTH_COMMENT} from './constants.js';
import {VALID_SYMBOLS} from './constants.js';
import {MAX_HASHTAG_COUNT} from './constants.js';
import {MAX_SYMBOLS_COUNT} from './constants.js';

const form = document.querySelector('.img-upload__form');
const inputHashtags = document.querySelector('.text__hashtags');
const comments = document.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'p',
  errorTextClass: 'form__error'
});

const validateComments = (value) => checkLength(value, MAX_LENGTH_COMMENT);

pristine.addValidator(
  comments,
  validateComments,
  `Длина комментария не должна превышать ${MAX_LENGTH_COMMENT}`,
  1,
  true
);

const validateCountHashtag = (value) => {
  if (!value.replace(/\s+/g, '')) {
    return true;
  }
  const tags = value.replace(/\s+/g, ' ').trim().toLowerCase().split(' ');
  return !tags.some((item) => !VALID_SYMBOLS.test(item));
};

pristine.addValidator(
  inputHashtags,
  validateCountHashtag,
  `Хэштег должен начинаться с символа #, содержать символы латинского и русского алфавитов, цифры, его длина не должна превышать ${MAX_SYMBOLS_COUNT} символов`,
  1,
  true
);

const validateNumberHashtag = (value) => {
  const tags = value.replace(/\s+/g, ' ').trim().toLowerCase().split(' ');
  return tags.length <= MAX_HASHTAG_COUNT;
};

pristine.addValidator(
  inputHashtags,
  validateNumberHashtag,
  `Количество хештегов должно быть не больше ${MAX_HASHTAG_COUNT}`,
  1,
  true
);

const validateUniqueHashtag = (value) => {
  const tags = value.replace(/\s+/g, ' ').trim().toLowerCase().split(' ');
  const uniqueTags = [...new Set(tags)];
  return tags.length === uniqueTags.length;
};

pristine.addValidator(
  inputHashtags,
  validateUniqueHashtag,
  'Хештеги не должны повторяться',
  1,
  true
);

const validateForm = () => pristine.validate();

export {validateForm};
