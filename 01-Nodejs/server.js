let http = require('http');

// console.log(http);


let server = http.createServer((req, res) => {

console.log('request was made: ' + req.url);
    res.end('Hello from the server');
})


server.listen(3000, 'localhost', () => {
    console.log('server is running on port 3000');
});