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

  moveAt(ev.pageX);

  function moveAt(pageX) {
    ev.target.style.left = pageX - 20 + 'px';

    (ev.target.className === 'max')
      ? maxValue.textContent = pageX
      : minValue.textContent = pageX;
  }

  if (parseInt(maxValue.textContent) <= parseInt(min.style.left) + 20) {
    maxValue.textContent = 'aaa';
  }

  function onMouseMove(ev2) {
    let x = ev2.pageX;
    const minimum = min.style.left;
    const maximum = max.style.left;

    if (ev2.target === min
      && parseInt(ev2.target.style.left) >= (parseInt(maximum))) {
      x = parseInt(maximum);
    } else if (ev2.target === max
      && parseInt(ev2.target.style.left) <= parseInt(minimum)) {
      x = parseInt(minimum);
    }
    moveAt(x);
  }

  document.addEventListener('mousemove', onMouseMove);

  ev.target.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    ev.target.onmouseup = null;
  };
});
