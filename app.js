const http = require('http'); //use http module

const server = http.createServer((req, res)=>{    //create server object with a function as parameter. Function takes in 
												  //2 parameters, request and response
	console.log(req.url, req.method, req.headers);
	
	res.setHeader('Content-Type', 'text/html');   //res = response. Response with setting the header with type text/html 
	res.write('<html>');
	res.write('<head><title>Page Title</title></head>'); //write response into an html file that will return when user request access to site
	res.write('<body><h1>Hello</h1></body>');
	res.write('</html>');
	res.end();                                           //response ends here, write more after = error
	
});

server.listen(3000);                                  //Keeps the program running and listens for requests
                                                      // 3000 = port name for local server
                                                      // Access local server by typing to web browser localhost:3000 
