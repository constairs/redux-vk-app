var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var wepbackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var express = require('express');
var compiler = webpack(config);

var app = express();
var port = 8888;

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(wepbackHotMiddleware(compiler));

app.get("/", function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.listen(port, function(error) {
	if(error) {
		console.error(error);
	} else {
		console.info('==> Listening on port %s. Open up http://localhost:%s/ in your bro user.', port, port);
	}
});