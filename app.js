/**
 * Module dependencies.
 */
var express    = require('express');
var connect    = require('connect');
var formidable = require('express-formidable');
var app        = express();
var port       = process.env.PORT || 3000;

// Configuration
app.use(express.static(__dirname + '/public'));
app.use(connect.cookieParser());
app.use(connect.logger('dev'));
//app.use(connect.bodyParser());
app.use(formidable.parse({ keepExtensions: true, uploadDir: "/Users/kevin.adesara/media-upload/" }));
app.use(connect.urlencoded());
app.use(connect.json());

// Routes

require('./routes/routes.js')(app);

app.listen(port);
console.log('The App runs on port ' + port);
