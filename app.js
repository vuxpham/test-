const http = require('http'); //use http module
const fs = require('fs');

const server = http.createServer((req, res)=>{    
	
	const url = req.url;
	const method = req.method;
	
	if(url === '/'){                              
		res.write('<html>');
		res.write('<head><title>Enter things</title></head>'); 
		res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
		res.write('</html>');
		return res.end();                         
	}
	if(url === '/message' && method === 'POST')
	{
		const a = 0;
		const body = [];                          
		req.on('data', chunk => {				   
			console.log(chunk);                   
			console.log(body.push(chunk));
		});
		
		req.on('end', ()=>{                                          
			const parsedBody = Buffer.concat(body).toString();       
			console.log(parsedBody);                                 
			const message = parsedBody.split('=')[1];                 
			fs.writeFileSync('message.txt', message);                
		});												              
	
		res.statusCode = 302;                     
		res.setHeader('Location', '/');
		return res.end();
		
	}
	
	res.setHeader('Content-Type', 'text/html');   
	res.write('<html>');
	res.write('<head><title>Page Title</title></head>'); 
	res.write('<body><h1>Hello</h1></body>');
	res.write('</html>');
	res.end();                                         
	
});

server.listen(3000);                                  