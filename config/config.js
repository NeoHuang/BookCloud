var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'bookcloud'
    },
    port: 3000,
    db: 'mongodb://localhost/bookcloud-development'
    
  },

  test: {
    root: rootPath,
    app: {
      name: 'bookcloud'
    },
    port: 3000,
    db: 'mongodb://localhost/bookcloud-test'
    
  },

  production: {
    root: rootPath,
    app: {
      name: 'bookcloud'
    },
    port: 3000,
    db: 'mongodb://localhost/bookcloud-production'
    
  }
};

module.exports = config[env];
