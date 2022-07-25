// Citation for this basic ZeroMQ microservice 
// Date: 7/15/2022
// Source code is adapted from ZeroMQ guide. 
// Source URL: https://zguide.zeromq.org/docs/chapter1/

// Citation for profanity library utilized 
// Date: 7/24/2022 
// Source code is adapted from profanity.js documentation 
// Source URL: https://github.com/rodgeraraujo/profanity#readme

const Profanity = require('profanity-js');

var zmq = require('zeromq');

var responder = zmq.socket('rep');

responder.on('message', function(request) {  

  const profanity = new Profanity("", {
    language: 'en-us',
  });

  let input = request.toString()


    if(profanity.isProfane(input) == true) {
      responder.send(1);
    }

    else if(profanity.isProfane(input) == false) {
      responder.send(0);
    }
});

responder.bind('tcp://*:5555', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Listening on 5555...");
  }
});

process.on('SIGINT', function() {
  responder.close();
});