var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('You are  in AWS  Cloud. This is my final project of deploying nodejs application using aws-ec2, github, jenkins and docker'); //write a response to the client
  res.end(); //end the response
}).listen(4000); //the server object listens on port 4000
