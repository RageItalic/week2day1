var myMOD = require ("./readandprinthtmlusingcallbacks");
var https = require('https');

var parameters = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function functionWithCallback (options, callback) {
  https.get(options, callback);
}

function printHTML (html) {
  console.log(html);
}

printHTML(functionWithCallback(parameters, myMOD));