
var express = require('express');
var proxy = require('http-proxy-middleware');
var cors = require('cors');

var jsonPlaceholderProxy = proxy({
  target: 'http://test-api.clonedesk.com',
  changeOrigin: true,
});

var app = express();
app.use(cors())
app.use('/api', jsonPlaceholderProxy);
app.listen(3001);

