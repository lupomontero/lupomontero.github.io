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


var fn = function (body, h1) {

  body.style = 'background-color: ' + randomColour();
  h1.style = 'color: ' + randomColour();
  window.setTimeout(fn.bind(null, body, h1), 10);
};


var body = document.getElementsByTagName('body')[0];
var h1 = document.getElementsByTagName('h1')[0];


fn(body, h1);


body.onclick = function () {

  var fx = ['rubberBand', 'tada', 'jello', 'hinge'];

  h1.className = 'animated ' + fx[random(0, fx.length - 1)];

  window.setTimeout(function () {

    h1.className = '';
  }, 1000);

  return false;
};

