const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesFragment = document.createDocumentFragment();
const picturesContainer = document.querySelector('.pictures');

const renderPictures = (photos) => {
//console.log(photos);
  photos.forEach((photo) => {
    const photoElement = pictureTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = photo.url;
    photoElement.querySelector('.picture__comments').textContent = photo.comments.length;
    photoElement.querySelector('.picture__likes').textContent = photo.likes;
    picturesFragment.append(photoElement);
  });
  picturesContainer.append(picturesFragment);
};

export {renderPictures};
