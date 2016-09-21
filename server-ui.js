var express = require('express'),
    path = require('path'),
    app = express();

// Configure app (Set view engine and default directory for html)
app.set('port', process.env.PORT || 8080);

// Use Middleware
// This is required so that css and javascript files are visible
app.use(express.static(__dirname));

// Routes
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

// Simple web server
var server = app.listen(app.get('port'), function () {
    console.log("UI server running in port ", app.get('port'));
});
