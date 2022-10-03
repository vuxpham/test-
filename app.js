const http = require('http'); //use http module

const server = http.createServer((req, res)=>{    //create server object with a function as parameter. Function takes in 
												  //2 parameters, request and response
	console.log(req);
	
});

server.listen(3000);                                  //Keeps the program running and listens for requests
                                                      // 3000 = port name for local server
                                                      // Access local server by typing to web browser localhost:3000 
