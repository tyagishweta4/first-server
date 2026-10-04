import http from 'http';

const PORT = 5000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json',
    })
    res.end(JSON.stringify({
        name:'shweta',
        age: '30'
    }));
});

server.listen(PORT, () => {
    console.log(`listing on port ${PORT}`)
})