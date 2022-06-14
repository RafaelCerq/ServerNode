console.log('Loading configuration file...');
var fsconfig = require('fs');
var data = fsconfig.readFileSync('config.txt', 'utf8');
var config = JSON.parse(data);

var http = require('http');
var static = require('node-static');
var path = new static.Server(`${__dirname}/projects/` + config.project)

http.createServer(function (req, res) {
    req.addListener('end', function () {
        path.serve(req, res)
    }).resume()
 }).listen(config.port);


console.log('Server started: localhost:' + config.port);