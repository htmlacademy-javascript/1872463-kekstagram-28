import {openModal} from './big-picture.js';
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesFragment = document.createDocumentFragment();
const picturesContainer = document.querySelector('.pictures');

const renderPictures = (photos) => {
//console.log(photos);
  photos.forEach((photo) => {
    const photoElement = pictureTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = photo.url;
    photoElement.querySelector('.picture__img').alt = photo.description;
    photoElement.querySelector('.picture__comments').textContent = photo.comments.length;
    photoElement.querySelector('.picture__likes').textContent = photo.likes;
    photoElement.dataset.photoId = photo.id;
    picturesFragment.append(photoElement);
  });
  picturesContainer.append(picturesFragment);
  picturesContainer.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('picture__img')) {
      evt.preventDefault();
      const id = evt.target.closest('a').dataset.photoId;
      const index = photos.findIndex((item) => id * 1 === item.id);
      openModal(photos[index]);
    }
  });

};

export {renderPictures};
