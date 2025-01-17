const http = require('http');
const fs = require('fs')
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {

    res.setHeader = ('Content-Type', 'text/html')
    console.log(req.url)
    if (req.url == '/') {
        res.statusCode = 200;
        res.end('<h1>This is the code of mine</h1><p>This is the way to say Namaste in India!</p>');

    }
    else if (req.url == '/About') {
        res.statusCode = 200;
        res.end('<h1>About code of mine</h1><p>This is the way to say Namaste in India! in About code!</p>');

    }
    else if (req.url == '/Hello') {
        res.statusCode = 200;
        const Htmlpage = fs.readFileSync('index.html')
        res.end(Htmlpage.toString());

    }
    else {
        res.statusCode = 404;
        res.end('<h1>Not Found</h1><p>This page is not found on server</p>');

    }

})
server.listen(port, () => {
    console.log(`Notify me by the port ${port}`);
})
