/* Eduardo Oviedo Blanco
 * eduardo.oviedo@gmail.com
 * GnA server
 */

// Module dependencies.
var express = require('express'),
  routes = require('./routes'),
  http = require('http'),
  path = require('path');

var app = express(),
  store = new express.session.MemoryStore;

// all environments
app.set('port', process.env.PORT || 3001);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon("public/images/favicon.ico"));
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.cookieParser('yaragloriana')); 
app.use(express.session({ secret: 'yaragloriana', store: store }));
app.use(app.router);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
};

app.get('/', routes.index);
app.get('/404', routes.notfound);

http.createServer(app).listen(app.get('port'), function(){
  console.log('GnA listening on port ' + app.get('port'));
});
