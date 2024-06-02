const http = require('http');
const url = require('url');

const PORT = 8000;

http
    .createServer((req, res) => {
        const myUrl = url.parse(req.url).pathname;
        switch (myUrl) {
            case '/':
                res.end('Hello from Home Page');
                break;
            case '/about':
                res.end("Hello from About Page");
                break;
            case '/contact':
                res.end('Hello from Contact Page');
                break;
            default:
                res.writeHead(404, { "content-type": "text/html" });
                res.end('404 Not Found');
        }
    })
    .listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })