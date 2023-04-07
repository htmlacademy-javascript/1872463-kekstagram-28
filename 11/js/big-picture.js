import {COMMENTS_STEP} from './constants.js';

const bigPictureModal = document.querySelector('.big-picture'); // модальное окно
const bigPictureModalClose = bigPictureModal.querySelector('.cancel'); // кнопка закрытия модального окна
const bigPictureImage = bigPictureModal.querySelector('.big-picture__img img');
const bigPictureLikes = bigPictureModal.querySelector('.likes-count');
const bigPictureCaption = bigPictureModal.querySelector('.social__caption');
const bigPictureCountComments = bigPictureModal.querySelector('.social__comment-count');
const commentTemplate = bigPictureModal.querySelector('.social__comment');
const commentsContainer = bigPictureModal.querySelector('.social__comments');
const loaderButton = bigPictureModal.querySelector('.social__comments-loader');

const commentsList = [];
let commentsCount = 0;
let commentsTotal = 0;

const showModal = () => {
  bigPictureModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const hideModal = () => {
  bigPictureModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const addEscListiner = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeModal();
  }
};

const addCloseListener = () => {
  bigPictureModalClose.addEventListener('click', closeModal);
};

const renderComment = (comment) => {
  const commentElement = commentTemplate.cloneNode(true);
  commentElement.querySelector('.social__picture').src = comment.avatar;
  commentElement.querySelector('.social__picture').alt = comment.name;
  commentElement.querySelector('.social__text').textContent = comment.message;
  commentsCount++;
  return commentElement;
};

const renderComments = () => {
  const commentsFragment = document.createDocumentFragment();
  commentsList.splice(0, COMMENTS_STEP).forEach((comment) => {
    commentsFragment.append(renderComment(comment));
  });
  commentsContainer.append(commentsFragment);
  bigPictureCountComments.innerHTML = `${commentsCount} из <span class="comments-count">${commentsTotal}</span> комментариев`;
  if (commentsCount < commentsTotal) {
    loaderButton.classList.remove('hidden');
  } else {
    loaderButton.classList.add('hidden');
  }
};

loaderButton.addEventListener('click', () => {
  renderComments();
});

const renderModal = (photo) => {
  bigPictureImage.src = photo.url;
  bigPictureImage.alt = photo.description;
  bigPictureLikes.textContent = photo.likes;
  bigPictureCaption.textContent = photo.description;
};

const openModal = (photo) => {
  commentsContainer.innerHTML = '';
  commentsCount = 0;
  commentsTotal = photo.comments.length;
  commentsList.length = 0;
  commentsList.push(...photo.comments.slice());
  renderModal(photo);
  renderComments();
  showModal();
  addCloseListener();
  document.addEventListener('keydown', addEscListiner);
};

function closeModal () {
  hideModal();
  document.removeEventListener('keydown', addEscListiner);
}

export {openModal};
