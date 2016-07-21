'use strict';

// libs
const Path = require('path');

// Hapi
const Hapi = require('hapi');

// Hapi plugins
const Reporter = require('good');
const Inert = require('inert');

// config objects
const SERVER_HOST = 'localhost';
const SERVER_PORT = 8000;
const hapiOptions = {
  connections: {
    routes: {
      files: {
        relativeTo: Path.resolve(__dirname, '../dist')
      }
    }
  }
};

let goodOptions = {
  reporters: {
    console: [
      {
        module: 'good-console',
        args: [{ log: '*', response: '*' }]
      }, 'stdout'
    ]
  }
};


/**
 * Create a new Hapi server
 */
const server = new Hapi.Server(hapiOptions);
server.connection({host: SERVER_HOST, port: SERVER_PORT});


/**
 * Register Hapi plugins
 */
server.register([
  {
    register: Reporter,
    options: goodOptions
  },
  {
    register: Inert,
    options: {}
  }
], (err) => {
  if (err) {
    throw err;
  }
});


// Hapi routes
server.route([
  {
    method: 'GET',
    path: '/{param*}',
    handler: {
      file: 'index.html'
    }
  },
  {
    method: 'GET',
    path: '/assets/app.js',
    handler: {
      file: 'app.js'
    }
  }
]);

module.exports = server;
