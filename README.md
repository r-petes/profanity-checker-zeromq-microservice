# profanity-checker-zeromq-microservice

# Starting the server: 
1. Download ZIP of source code from https://github.com/r-petes/profanity-checker-zeromq-microservice.git and unzip. 
2. Open in your IDE. 
6. Run "node profanityserver.js" to start your the server. 
7. Your server is now running!

# Creating the client and sending requests to the server:  
1. Create directory or navigate into existing directory which will house client 
2. Optional: If npm is not pre-installed in directory, run "npm init" 
3. Run "npm install zeromq@5"
4. Run "npm i profanity-js" 
5. Write the request to the server in a .js file (refer to the example call below for guidance on sending a request/receiving a response). The specific zeromq command to send a request to the server is requester.send("stringtovalidate")
6. Run "node yourjavascriptfilename.js" to start your client. 
7. Receive data back from the microservice 

<!-- Citation for this basic ZeroMQ microservice  -->
 <!-- Date: 7/15/2022
 Source code is adapted from ZeroMQ guide. 
 Source URL: https://zguide.zeromq.org/docs/chapter1/ -->

# Example request and response: 

var zmq = require('zeromq');

- Sending a request by creating a requester, connecting to the host, and sending your data: 

var requester = zmq.socket('req');

requester.connect("tcp://localhost:5555");

requester.send("stringtovalidate");


- Response handling: 

requester.on("message", function(reply) {

  if (reply  == 0) {
        // Do something to indicate that the string contains no profanity
    }
    else if (reply  == 1) {
        // Do something to indicate that the string contains no profanity
    }
});


- Close process

process.on('SIGINT', function() {
  requester.close();
});

NOTE: See profanityclient.js for example calls to the microservice. 

# UML Sequence Diagram: 

![Profanity Checker Sequence Diagram](https://user-images.githubusercontent.com/73244447/180698775-3858b971-6bfc-4ab1-9977-898825a35f36.png)
