const http = require('http');
const express = require('express');

const port = 3000;
const app = express();
const router = express.Router();

app.use("/", router.get("/", function (req, res) {
    res.send("Hello World");
    // res.redirect();
})); // url : /emaillist/

const server = http.createServer(app);

server.on("error", onError);
server.on("listening", onListening);

server.listen(port); // server start

function onError(error){
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening () {
    const addr = server.address();
    const bind = (typeof addr === "string") ? "pipe " + addr : "port " + addr.port;

    console.log("Listening on " + bind);
}
