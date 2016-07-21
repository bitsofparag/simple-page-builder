var devServer = require('./config/hapi.config');

devServer.start( err => {
  if (err) {
    console.log('Development server could not be started!', err);
    return;
  }

  console.log('Development server started on ', devServer.info.uri);
  console.log('details: ', devServer.info);
});
