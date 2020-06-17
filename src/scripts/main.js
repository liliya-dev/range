/* eslint-disable no-console */
'use strict';

const minSlider = document.querySelector('.min');
const maxSlider = document.querySelector('.max');
let min = parseInt(window.getComputedStyle(minSlider, null).left);
let max = parseInt(window.getComputedStyle(maxSlider, null).left);

minSlider.getElementsByClassName.position = 'absolute';
maxSlider.getElementsByClassName.position = 'absolute';

minSlider.addEventListener('mousedown', function(ev) {
  if (ev.target !== minSlider && ev.target !== maxSlider) {
    return;
  }

  const toMove = function(move) {
    let coordinatesX = move.clientX - ev.target.offsetWidth / 2;

    if (coordinatesX > max) {
      coordinatesX = max;
    }
    ev.target.style.left = coordinatesX + 'px';
    min = parseInt(minSlider.style.left);
    console.log(min, max);
  };

  document.addEventListener('mousemove', toMove);

  document.addEventListener('mouseup', function() {
    document.removeEventListener('mousemove', toMove);
  });
});

maxSlider.addEventListener('mousedown', function(ev) {
  if (ev.target !== minSlider && ev.target !== maxSlider) {
    return;
  }

  const toMove = function(move) {
    let coordinatesX = move.clientX - ev.target.offsetWidth / 2;

    if (coordinatesX < min) {
      coordinatesX = min;
    }
    ev.target.style.left = coordinatesX + 'px';
    max = parseInt(maxSlider.style.left);
  };

  document.addEventListener('mousemove', toMove);

  document.addEventListener('mouseup', function() {
    document.removeEventListener('mousemove', toMove);
  });
});
