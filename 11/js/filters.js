import { renderPictures } from './pictures.js';
import { MAX_RANDOM_PHOTOS, DEBOUNCE_TIMEOUT } from './constants.js';
import { debounce } from './utils.js';

const filters = document.querySelector('.img-filters');

const photos = [];

const filterPhotos = (id) => {
  switch (id) {
    case 'filter-default':
      return photos;
    case 'filter-random':
      return [...photos]
        .sort(() => Math.random() - 0.5)
        .slice(0, MAX_RANDOM_PHOTOS);
    case 'filter-discussed':
      return [...photos].sort((a, b) => b.comments.length - a.comments.length);
  }
};

filters.addEventListener('click', debounce((evt) => {
  if (evt.target.classList.contains('img-filters__button')) {
    document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
    const id = evt.target.id;
    document.querySelectorAll('.picture').forEach((item) => {
      item.remove();
    });
    renderPictures(filterPhotos(id));
  }
}, DEBOUNCE_TIMEOUT));

const loadFilters = (data) => {
  filters.classList.remove('img-filters--inactive');
  photos.push(...data.slice());
  renderPictures(photos);
};

export { loadFilters };
