var getHTML = require('https');

options = {
host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML(options) {

var buffer = "";

  /* Add your code here */
  getHTML.get(options, function(response){

    response.setEncoding('utf8');
    response.on('data', function (data){
      buffer += data;
      //console.log('Chunk received. Length:', data.length);
      //console.log(data + '\n');
    });
    response.on('end', function(){
      console.log('Response stream complete.');
      console.log(buffer);
    });
  });
  /* Add your code here */

}
getAndPrintHTML(options);

