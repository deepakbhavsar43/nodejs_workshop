// console.log("hello");
const http = require('http');
const hostname = "localhost";
const port = 8000;
const Skillserver = http.createServer(function(request, response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write("Hello, I am learning Nodejs...");
    response.end();
});

Skillserver.listen(port, hostname);