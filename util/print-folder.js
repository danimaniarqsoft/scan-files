'use strict';

const leadinSpaces = require('./format-string').leadinSpaces
const Config = require('./diff-folder').Config

exports.printFolder = function (leftTree, action) {
  var deep = - Config.TAB_SIZE
  if (action === undefined) {
    action = defaultAction
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

function defaultAction(currentFile, deep) {
  var symbol = currentFile.type === 'directory' ? '+' : '-'
  var presentSymbol = currentFile.isPresent ? '' : '*'
  console.log(leadinSpaces(deep, symbol + currentFile.name + presentSymbol))
}
