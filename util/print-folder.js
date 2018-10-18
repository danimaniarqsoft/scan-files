'use strict';

const leadinSpaces = require('./format-string').leadinSpaces
const Config = require('./diff-folder').Config

exports.printFolder = function (leftTree, action) {
  var deep = - Config.TAB_SIZE
  if (action === undefined) {
    action = defaulAction
  }
  printTreeElements(leftTree, deep, action)
}

var printTreeElements = function (tree, deep, action) {
  deep = deep + Config.TAB_SIZE;
  tree.children.forEach(currentFile => {
    action(currentFile, deep);
    if (currentFile.children) {
      printTreeElements(currentFile, deep, action)
    }
  });
}

function defaulAction(currentFile, deep) {
  console.log(leadinSpaces(deep, currentFile.name))
}
