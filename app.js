const http = require('http'); //use http module

const server = http.createServer((req, res)=>{    //create server object with a function as parameter. Function takes in 
												  //2 parameters, request and response
	
	const url = req.url;
	
	if(url === '/'){                              //if input url after host is exactly "/", return this html page
		res.write('<html>');
		res.write('<head><title>Enter things</title></head>'); //write response into an html file that will return when user request access to site
		res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
		res.write('</html>');
		return res.end();                         //return so that it exits the function, and the write after does not run after the end method, causing error
	}
	
	res.setHeader('Content-Type', 'text/html');   //after form submitted, url changed to /message => new file => this code runs without error
	res.write('<html>');
	res.write('<head><title>Page Title</title></head>'); 
	res.write('<body><h1>Hello</h1></body>');
	res.write('</html>');
	res.end();                                           //response ends here, write more after = error
	
});

server.listen(3000);                                  //Keeps the program running and listens for requests
                                                      // 3000 = port name for local server
                                                      // Access local server by typing to web browser localhost:3000 
