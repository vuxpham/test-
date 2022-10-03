const http = require('http'); //use http module
const fs = require('fs');

const server = http.createServer((req, res)=>{    //create server object with a function as parameter. Function takes in 
												  //2 parameters, request and response
	
	const url = req.url;
	const method = req.method;
	
if(url === '/'){                              //if input url after host is exactly "/", return this html page
		res.write('<html>');
		res.write('<head><title>Enter things</title></head>'); //write response into an html file that will return when user request access to site
		res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
		res.write('</html>');
		return res.end();                         //return so that it exits the function, and the write after does not run after the end method, causing error
	}
	if(url === '/message' && method === 'POST')
	{
		const body = [];                          //array of buffers
		req.on('data', chunk => {				  //when event 'data' happens, runs the code that takes data to buffer as parameter, log it to console and push it 
			console.log(chunk);                   //to the array of buffers
			console.log(body.push(chunk));
		});
		
		req.on('end', ()=>{                                          //When event 'end' happens, run the codes below
			const parsedBody = Buffer.concat(body).toString();       //Merge the array of buffers into 1 buffer object, then convert it to a string
			console.log(parsedBody);                                 //Log the the buffer turned into string
			const message = parsedBody.split('=')[1];                //Split the buffer 
			fs.writeFileSync('message.txt', message);                //Write message to file. Must be in here because
		});												             //the declared function does not actually happen until 'end' event 
		
		                                                             //writeFile is asynchronous (run parallel with other methods) while writeFileSync is synchronous (runs after previous methods are done)
		res.statusCode = 302;                     
		res.setHeader('Location', '/');
		return res.end();
		
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
