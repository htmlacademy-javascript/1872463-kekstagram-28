import { POST_DATA, GET_DATA } from './constants.js';

const getPhotos = () =>
  fetch(GET_DATA)
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      throw new Error();
    });

const postPhoto = (body) =>
  fetch(POST_DATA, {
    method: 'post',
    body,
  });


export { getPhotos, postPhoto };
