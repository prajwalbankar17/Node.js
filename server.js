const http = require('http');

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.write("I am Prajwal Bankar");
        res.end();
    }
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`)
})