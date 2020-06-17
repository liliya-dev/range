/* eslint-disable no-console */
'use strict';

const minSlider = document.querySelector('.min');
const maxSlider = document.querySelector('.max');
const minText = document.querySelector('.min_value');
const maxText = document.querySelector('.max_value');

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
    }

    if (coordinatesX < 0) {
      coordinatesX = 0;
    }
    ev.target.style.left = coordinatesX + 'px';
    min = parseInt(minSlider.style.left);
    minText.textContent = coordinatesX + ' $';
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
    }

    if (coordinatesX > 200) {
      coordinatesX = 200;
    }
    ev.target.style.left = coordinatesX + 'px';
    max = parseInt(maxSlider.style.left);
    maxText.textContent = coordinatesX + ' $';
  };

  document.addEventListener('mousemove', toMove);

  document.addEventListener('mouseup', function() {
    document.removeEventListener('mousemove', toMove);
  });
});
