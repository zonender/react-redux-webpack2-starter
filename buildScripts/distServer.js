//this is all we need for our dist server to serve our app locally for dubugging,
//this is NOT for production, this is just to see how the app looks like on the local machine,
//and to confirm it works locally.
//typically these files should be uploaded to some host that will serve them through the internet.
import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
//we will remove any call for webpack since we will no longer going to be
//interacting with webpack for our dist server, we are going to be serving the statis
//built files
// import webpack from 'webpack';
// import config from '../webpack.config.dev';

const port = 3000;
const app = express();

//also we should enable gzip compression for our dist server
app.use(compression());
//we will have to add support for express for serving static files:
app.use(express.static('dist'));

//also remove the call to the compiler
// const compiler = webpack(config);

//also remove the call to configue webpack middleware
// app.use(require('webpack-dev-middleware')(compiler, {
//   noInfo: true,
//   publicPath: config.output.publicPath
// }));

//and for prod we will be serving html from the dist folder not the src folder
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
