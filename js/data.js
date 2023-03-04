// из модуля utils.js импортируются счётчики
import {getRandomInteger, createRandomIdFromRangeGenerator} from './utils.js';
// И импортируются массив констант из модуля constants.js нужных для работы счётчков
import {
  PICTURE_COUNT,
  LIKE_MIN_COUNT,
  LIKE_MAX_COUNT,
  COMMENT_COUNT,
  COMMENTS_MIN_COUNT,
  COMMENTS_MAX_COUNT,
  AVATAR_MIN,
  AVATAR_MAX,
  DESCRIPTION,
  COMMENT_LINES,
  USER_NAMES
} from './constants.js';

//пример вызова
const generatePhotoId = createRandomIdFromRangeGenerator(1, PICTURE_COUNT);
const generateUrl = createRandomIdFromRangeGenerator(1, PICTURE_COUNT);
const generateCommentId = createRandomIdFromRangeGenerator(0, COMMENT_COUNT);

const getComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(AVATAR_MIN, AVATAR_MAX)}.svg`,
  name: USER_NAMES[getRandomInteger(0, USER_NAMES.length - 1)],
  message:  COMMENT_LINES[getRandomInteger(0, COMMENT_LINES.length - 1)]
});

const getComments = (count) => {
  const comments = [];
  for (let i = 0; i < count; i++) {
    comments.push(getComment());
  }
  return comments;
};

const getPhoto = () => ({
  id: generatePhotoId(),
  url: `photos/${generateUrl()}.jpg`,
  description: DESCRIPTION[getRandomInteger(0,DESCRIPTION.length - 1)],
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: getComments(getRandomInteger(COMMENTS_MIN_COUNT, COMMENTS_MAX_COUNT)),

});

//описание функции getPhotos
const getPhotos = (count) => {
  const photos = [];
  for (let i = 0; i < count; i++) {
    photos.push(getPhoto());
  }
  return photos;
};

export {getPhotos};
