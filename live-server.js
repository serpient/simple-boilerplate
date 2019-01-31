var liveServer = require("live-server");
 
var params = {
    host: "localhost", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
    root: "./", // Set root directory that's being served. Defaults to cwd.
    open: true, // When false, it won't load your browser by default.
    file: "index.html", // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
    mount: ['./src', './node_modules'], // Mount a directory to a route.
    logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
    watch: 'css,js,html',
};

liveServer.start(params);