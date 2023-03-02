const PICTURE_COUNT = 25; // ID фото - number
const URL_COUNT = 25; // ID url - string
const USERS_COUNT = 25; // количество пользователей - number
const LIKE_MIN_COUNT = 15; // min число лайков - number
const LIKE_MAX_COUNT = 200; // max число лайков - number
const COMMENT_COUNT = 500000; // ID комментария - number
const COMMENTS_MIN_COUNT = 0; // МИН КОЛ-ВО
const COMMENTS_MAX_COUNT = 20; // МАКС КОЛ-ВО
const AVATAR_MIN = 1;
const AVATAR_MAX = 6;

// Описания фото
const DESCRIPTION = [
  'Начинаем отдыхать!',
  'Первый закат на пляже',
  'Наша гостиница',
  'Вид из окна',
  'Просто море! Просто отпуск!!!',
  'И здесь живут люди',
  'В ресторане',
  'Красивая девушка',
  'Просто так, для себя',
  'Красотища!!!',
  'Пора домой',
  'Отпуск закончился',
  'что то пошло не так ...',
  'Как вам снимок',
  'Снова приеду сюда',
  'Наш номер',
  'Первый выход на море',
  'А ещё вот так могу',
  'Последний кадр',
  'Фото на память',
  'Тишина и никаких детей',
  'Всё серьёзно!',
  'Не самый хороший мой снимок',
  'Пробный кадр',
  'Привет, из дальних стран!',
  'Хорошо лежать на пляже',
  'Здравствуй, Родина!',
  'Вот мы и дома',
  'Море и небо',
  'Пора домой',
];

// Коментарии к фото
const COMMENT_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
]

// Имена пользователей, массив
const USER_NAMES = [
  'Андрей',
  'Борис',
  'Валентин',
  'Валентина',
  'Григорий',
  'Дмитрий',
  'Дарья',
  'Егор',
  'Елена',
  'Зинаида',
  'Игорь',
  'Карина',
  'Леонид',
  'Мария',
  'Николай',
  'Ольга',
];
// Фамилии пользователей, массив
 const USER_SURNAMES = [
  'Сидороff',
  'Макаронэ',
  'Синдэрэла',
  'Гретцки',
  'Коротченко',
  'Берёза',
  'Волк',
  'Страус',
];
// Генератор случайных чисел, с повторами
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
// Генератор случайных чисел, без повторов
const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= max - min + 1) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};
//пример вызова
const generatePhotoId = createRandomIdFromRangeGenerator(1, PICTURE_COUNT);
const generateUrl = createRandomIdFromRangeGenerator(1, PICTURE_COUNT);
const generateCommentId = createRandomIdFromRangeGenerator(0, COMMENT_COUNT);
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

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

console.log(getPhotos(PICTURE_COUNT));
