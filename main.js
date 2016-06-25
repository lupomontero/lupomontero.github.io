'use strict';


var random = function (min, max) {

  if (max == null) {
    max = min;
    min = 0;
  }

  return min + Math.floor(Math.random() * (max - min + 1));
};


var randomColour = function () {

  return [
    'rgba(',
    random(0, 255), ', ',
    random(0, 255), ', ',
    random(0, 255), ', ',
    (random(0, 100) / 100).toFixed(1),
    ')'
  ].join('');
};


var fn = function () {

  document.getElementsByTagName('body')[0].style = 'background-color: ' + randomColour();
  document.getElementsByTagName('h1')[0].style = 'color: ' + randomColour();
  window.setTimeout(fn, 100);
};


fn();

