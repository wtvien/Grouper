var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var myProfile = require('./routes/my-profile');
var myGroups = require('./routes/my-groups');
var course = require('./routes/course');
var peer = require('./routes/peer');
var skeleton = require('./routes/skeleton');
var signin = require('./routes/signin');
var data = require('./routes/data');
var add = require('./routes/addCourse');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', signin.view);
app.get('/my-profile', myProfile.view);
app.get('/my-groups', myGroups.view);
app.get('/course/:courseId', course.view);
app.get('/course/:courseId/peer/:peerId', peer.view);
app.get('/skeleton', skeleton.view);
<<<<<<< HEAD
app.get('/index', index.view);
app.get('/data', data.getData);
=======
app.get('/signin', signin.view);
app.get('/data', data.loadData);
app.post('/data', data.saveData);
>>>>>>> 6bf09607ee75a9174361a4f438f151a0adbbd92a
app.get('/addCourse', add.addCourse);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
