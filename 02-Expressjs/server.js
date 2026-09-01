// let http = require('http');

// let server = http.createServer((req, res) => {

// // console.log('request was made: ' + req.url);
// //     res.end('Hello from the server.....');

//     if(req.url === '/home' || req.url === '/'){
//         res.end('Hello from the home page');
//     } 

//     if(req.url === '/about'){
//         res.end('Hello from the about page');
//     }

//     if(req.url === '/contact'){
//         res.end('Hello from the contact page');
//     }

//     if(req.url === '/services'){
//         res.end('Hello from the services page');
//     }

// });



// server.listen(3000, 'localhost', () => {
//     console.log('server is running on port 3000');
// });


const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from the home page');
});

app.get('/about', (req, res) => {
    res.send('Hello from the about page');
});

app.get('/contact', (req, res) => {
    res.send('Hello from the contact page');
});

app.post('/create', (req, res) => {
    res.send('Hello from the create page');
});

app.listen(3000, () => {
    console.log('server is running on port 3000');
});