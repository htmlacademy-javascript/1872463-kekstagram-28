const COMMENTS_STEP = 5;
const MAX_LENGTH_COMMENT = 140;
const MAX_SYMBOLS_COUNT = 20;
const VALID_SYMBOLS = new RegExp(`^#[a-zа-яё0-9]{1,${MAX_SYMBOLS_COUNT - 1}}$`,'i');
const MAX_HASHTAG_COUNT = 5;
const POST_DATA = 'https://28.javascript.pages.academy/kekstagram';
const GET_DATA = 'https://28.javascript.pages.academy/kekstagram/data';

export {
  COMMENTS_STEP,
  MAX_LENGTH_COMMENT,
  VALID_SYMBOLS,
  MAX_HASHTAG_COUNT,
  MAX_SYMBOLS_COUNT,
  POST_DATA,
  GET_DATA
};


