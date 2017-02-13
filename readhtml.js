var getHTML = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  //var buffer = "";

  /* Add your code here */
  getHTML.get(requestOptions, function(response){

    response.setEncoding('utf8');
    response.on('data', function (data){
      //buffer += data;
      console.log('Chunk received. Length:', data.length);
      console.log(data + '\n');
    });
    response.on('end', function(){
      console.log('Response stream complete.');
      //console.log(buffer);
    });
  });
}
getAndPrintHTMLChunks();