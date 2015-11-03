'use strict';

var path    = require('path');
var chalk   = require('chalk');

module.exports = {
  name: 'cordova',
  aliases: ['cdv'],
  description: 'Passes commands(plugin(s), platform(s), run, emulate) and arguments to the cordova command',
  works: 'insideProject',
  allowedCordovaCommands: [
    'emulate',
    'platform',
    'platforms',
    'plugin',
    'plugins',
    'prepare',
    'run',
  ],

  validateAndRun: function(rawArgs) {
    if(this.allowedCordovaCommands.indexOf(rawArgs[0]) > -1) {
      return this.run({}, rawArgs);
    }
  },

  run: function(options, rawArgs) {
    return require('../tasks/cordova')(rawArgs, this.project)();
  }
};
