const bigPictureModal = document.querySelector('.big-picture'); // модальное окно
// const bigPictureModalOpen = document.querySelector('.picture'); // ссылка по клике на которую откроется модальное окно
const bigPictureModalClose = bigPictureModal.querySelector('.cancel'); // кнопка закрытия модального окна
const bigPictureImage = bigPictureModal.querySelector('.big-picture__img img');
const bigPictureLikes = bigPictureModal.querySelector('.likes-count');
const bigPictureCaption = bigPictureModal.querySelector('.social__caption');
const bigPictureCountComments = bigPictureModal.querySelector('.comments-count');
const commentTemplate = bigPictureModal.querySelector('.social__comment');
const commentsContainer = bigPictureModal.querySelector('.social__comments');

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
  return commentElement;
};

const renderComments = (comments) => {
  const commentsFragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    commentsFragment.append(renderComment(comment));
  });
  commentsContainer.innerHTML = '';
  commentsContainer.append(commentsFragment);
};

const renderModal = (photo) => {
  bigPictureImage.src = photo.url;
  bigPictureImage.alt = photo.description;
  bigPictureLikes.textContent = photo.likes;
  bigPictureCaption.textContent = photo.description;
  bigPictureCountComments.textContent = photo.comments.length;
  renderComments(photo.comments);
};

const openModal = (photo) => {
  console.log(photo);
  renderModal(photo);
  showModal();
  addCloseListener();
  document.addEventListener('keydown', addEscListiner);
};

function closeModal () {
  hideModal();
  document.removeEventListener('keydown', addEscListiner);
}

export {openModal};
