const COMMENTS_STEP = 5;
const MAX_LENGTH_COMMENT = 140;
const MAX_SYMBOLS_COUNT = 20;
const VALID_SYMBOLS = new RegExp(`^#[a-zа-яё0-9]{1,${MAX_SYMBOLS_COUNT - 1}}$`, 'i');
const MAX_HASHTAG_COUNT = 5;
const POST_DATA = 'https://28.javascript.pages.academy/kekstagram';
const GET_DATA = 'https://28.javascript.pages.academy/kekstagram/data';
const MAX_RANDOM_PHOTOS = 10;
const DEBOUNCE_TIMEOUT = 500;
const ALERT_SHOW_TIME = 5000;
const ALERT_TEXT = 'Повторите попытку позже';
const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};
const INVALID_FILE_FORMAT = 'Данный файл не является изображением';

export {
  COMMENTS_STEP,
  MAX_LENGTH_COMMENT,
  VALID_SYMBOLS,
  MAX_HASHTAG_COUNT,
  MAX_SYMBOLS_COUNT,
  POST_DATA,
  GET_DATA,
  MAX_RANDOM_PHOTOS,
  DEBOUNCE_TIMEOUT,
  ALERT_SHOW_TIME,
  ALERT_TEXT,
  FILE_TYPES,
  SubmitButtonText,
  INVALID_FILE_FORMAT
};
