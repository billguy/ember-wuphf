'use strict';

var fs   = require('fs');
var path = require('path');

function EmberWuphf(project) {
  this.project = project;
  this.name    = 'EmberWuphf';
}

EmberWuphf.prototype.treeFor = function treeFor(name) {
  var treePath = path.relative(process.cwd(), __dirname);

  if (name === 'templates' || name === 'styles') {
      treePath = path.join(treePath, 'app', name);
  } else {
      treePath = path.join(treePath, name);
  }

  if (fs.existsSync(treePath)) {
    return treePath;
  }
};

EmberWuphf.prototype.included = function included(app) {
  this.app = app;
};

module.exports = EmberWuphf;
