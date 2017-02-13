var myMOD = require('../readandprinthtmlusingcallbacks.js');
var https = require('https');


var parameters = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6.html'
};

function printHTML(html){
  console.log(html.toLowerCase());
}

myMOD(parameters, printHTML)