'use strict';

exports.scan = function(path, data) {
    var walk = require('walk');
    var fs = require('fs');
    var options;
    var walker;
    var files = [];
    options = {
      followLinks: false
    , filters: ["Temp", "_Temp"]
    };
    walker = walk.walk(path, options);
    walker.on("file", function (root, fileStats, next) {
      fs.readFile(fileStats.name, function () {
        files.push(fileStats.name);
        next();
      });
    });
   
    walker.on("errors", function (root, nodeStatsArray, next) {
      next();
    });
   
    walker.on("end", function () {
        data(files);
    });
}


