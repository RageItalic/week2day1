var myMOD = require('../readandprinthtmlusingcallbacks.js');
var https = require('https');


var parameters = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6.html'
};

function printHTML(html){
  console.log(html.toUpperCase());
}

myMOD(parameters, printHTML)
/*function functionWithCallback (options, callback) {
  https.get(options, callback);
}

function printHTML (html) {
  console.log(html);
}

printHTML( myMOD.finale.functionWithCallback(parameters, printHTML));
*/

