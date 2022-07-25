// Citation for this  ZeroMQ microservice 
// Date: 7/15/2022
// Source code is adapted from ZeroMQ guide. 
// Source URL: https://zguide.zeromq.org/docs/chapter1/

var zmq = require('zeromq');

var requester = zmq.socket('req');

requester.connect("tcp://localhost:5555");

requester.send("hell");
requester.send("hello");

requester.on("message", function(reply) {
  if (reply  == 0) {
        console.log("Contains no profanity")
    }
    else if (reply  == 1) {
        console.log("ALERT: Contains profanity")
    }
});

process.on('SIGINT', function() {
  requester.close();
});