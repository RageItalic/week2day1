var getHTML = require('https');


function CallbackFunction(response){
    var buffer = '';
    response.setEncoding('utf8');
    response.on('data', function (data){
      buffer += data;
      //console.log(buffer);
      //console.log('Chunk received. Length:', data.length);
      //console.log(data + '\n');
      //return buffer;
    });
    response.on('end', function(){
      //return(buffer);
      console.log(buffer);
    });
  }


var parameters = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};



function functionWithCallback (options, callback) {
  getHTML.get(options, callback);
}

function printHTML (html) {
  console.log(html);
}

printHTML(functionWithCallback(parameters, CallbackFunction));