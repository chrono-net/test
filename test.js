var http = require("http");
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(3000);

console.log('Server running at http://localhost:3000/');
console.log('Node.js Server.');
console.log('Git Test');
console.log('Git Branch Test');
console.log('branch A');