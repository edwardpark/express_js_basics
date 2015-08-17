var express = require('express');
var app = express();

app.get('/', function(request, response){
  response.write("hello world");
  response.end();
});

app.listen(3000, function(){
  console.log("listening on port 3000 of awesome!");
});
