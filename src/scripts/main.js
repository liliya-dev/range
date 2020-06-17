/* eslint-disable no-undef */
/* eslint-disable no-console */
'use strict';

const minSlider = document.querySelector('.min');
const maxSlider = document.querySelector('.max');
const maxInput = document.querySelector('.max_input');
const minInput = document.querySelector('.min_input');
let maxInputValue;
let minInputValue;

let min = parseInt(window.getComputedStyle(minSlider, null).left);
let max = parseInt(window.getComputedStyle(maxSlider, null).left);

minSlider.getElementsByClassName.position = 'absolute';
maxSlider.getElementsByClassName.position = 'absolute';

minSlider.addEventListener('mousedown', function(ev) {
  maxSlider.style.zIndex = 2;
  minSlider.style.zIndex = 3;

  const toMove = function(move) {
    let coordinatesX = move.clientX - ev.target.offsetWidth / 2;

    if (coordinatesX > max) {
      coordinatesX = max;
    } else if (coordinatesX < 0) {
      coordinatesX = 0;
    }
    ev.target.style.left = coordinatesX + 'px';
    min = parseInt(minSlider.style.left);
    minInput.value = coordinatesX + '';
  };

  document.addEventListener('mousemove', toMove);

  document.addEventListener('mouseup', function() {
    document.removeEventListener('mousemove', toMove);
  });
});

maxSlider.addEventListener('mousedown', function(ev) {
  maxSlider.style.zIndex = 3;
  minSlider.style.zIndex = 2;

  const toMove = function(move) {
    let coordinatesX = move.clientX - ev.target.offsetWidth / 2;

    if (coordinatesX < min) {
      coordinatesX = min;
    } else if (coordinatesX > 200) {
      coordinatesX = 200;
    }
    ev.target.style.left = coordinatesX + 'px';
    max = parseInt(maxSlider.style.left);
    maxInput.value = coordinatesX + '';
  };

  document.addEventListener('mousemove', toMove);

  document.addEventListener('mouseup', function() {
    document.removeEventListener('mousemove', toMove);
  });
});

maxInput.addEventListener('change', function(ev) {
  ev.preventDefault();
  maxInputValue = Number(maxInput.value);

  if (!maxInputValue) {
    maxInput.value = '';
    alert('put correct number');

    return;
  }

  if (maxInputValue < min) {
    maxInputValue = min;
    maxInput.value = min;
  } else if (maxInputValue > 200) {
    maxInputValue = 200;
    maxInput.value = 200;
  }
  maxSlider.style.left = maxInputValue + 'px';
  max = maxInputValue;
});

minInput.addEventListener('change', function(ev) {
  ev.preventDefault();
  minInputValue = Number(minInput.value);

  if (!minInputValue) {
    minInput.value = '';
    alert('put correct number');

    return;
  }

  if (minInputValue > max) {
    minInputValue = max;
    minInput.value = max;
  } else if (minInputValue < 0) {
    minInputValue = 0;
    minInput.value = 0;
  }
  min = minInputValue;
  minSlider.style.left = minInputValue + 'px';
});
