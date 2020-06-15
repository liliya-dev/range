/* eslint-disable no-console */
'use strict';

const min = document.querySelector('.min');
const max = document.querySelector('.max');
const minValue = document.querySelector('.min_value');
const maxValue = document.querySelector('.max_value');

max.style.left = 170 + 'px';
min.style.left = 20 + 'px';

document.addEventListener('mousedown', function(ev) {
  ev.target.style.position = 'absolute';
  ev.target.style.zIndex = 2;

  const minimum = min.style.left;
  const maximum = max.style.left;

  moveAt(ev.pageX);

  function moveAt(pageX) {
    let x = pageX;

    if (ev.target === min) {
      if (parseInt(ev.target.style.left) > parseInt(maximum) - 30) {
        x = parseInt(maximum) - 35 + 'px';
      }
    }

    if (ev.target === max) {
      if (parseInt(ev.target.style.left) < parseInt(minimum) + 35) {
        x = parseInt(minimum) + 35 + 'px';
      }
    }

    ev.target.style.left = x - 20 + 'px';

    (ev.target.className === 'max')
      ? maxValue.textContent = pageX
      : minValue.textContent = pageX;
  }

  function onMouseMove(ev2) {
    moveAt(ev2.pageX);
  }

  document.addEventListener('mousemove', onMouseMove);

  ev.target.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    ev.target.onmouseup = null;
  };
});
