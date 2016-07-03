'use strict';

// libs
const Path = require('path');

// Hapi
const Hapi = require('hapi');

// Hapi plugins
const Reporter = require('good');
const Inert = require('inert');

// config objects
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
server.connection({host: 'localhost', port: 1337});


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
server.route({
  method: 'GET',
  path: '/{param*}',
  handler: {
    file: 'index.html'
  }
});

module.exports = server;
