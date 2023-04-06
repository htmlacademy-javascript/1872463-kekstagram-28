const imagePreview = document.querySelector('.img-upload__preview img');
const scaleValue = document.querySelector('.scale__control--value');
const buttonPlus = document.querySelector('.scale__control--bigger');
const buttonMinus = document.querySelector('.scale__control--smaller');
const scaleModel = {
  scale: 100,
  step: 25,
  max: 100,
  min: 25
};

const renderImage = () => {
  imagePreview.style.transform = `scale(${scaleModel.scale * 0.01})`;
};

const resetScaleModel = () => {
  scaleModel.scale = 100;
};

const renderScaleValue = () => {
  scaleValue.value = `${scaleModel.scale}%`;
};

const increaseScale = () => {
  if (scaleModel.scale + scaleModel.step <= scaleModel.max) {
    scaleModel.scale += scaleModel.step;
  }
};

const decreaseScale = () => {
  if (scaleModel.scale - scaleModel.step >= scaleModel.min) {
    scaleModel.scale -= scaleModel.step;
  }
};

const increaseScaleHandler = () => {
  increaseScale();
  renderImage();
  renderScaleValue();
};

const decreaseScaleHandler = () => {
  decreaseScale();
  renderImage();
  renderScaleValue();
};

buttonPlus.addEventListener('click', increaseScaleHandler);

buttonMinus.addEventListener('click', decreaseScaleHandler);

const resetScale = () => {
  resetScaleModel();
  renderImage();
  renderScaleValue();
};

export {resetScale};
