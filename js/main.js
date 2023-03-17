import {getPhotos} from './data.js'; // из модуля data.js импортируется переменная (функция) getPhotos
import {PICTURE_COUNT} from './constants.js';
import {renderPictures} from './pictures.js';
// import './big-picture.js'; // импортир модуля для открытия окна с большой картинкой
//console.log(getPhotos(PICTURE_COUNT));
renderPictures(getPhotos(PICTURE_COUNT));
