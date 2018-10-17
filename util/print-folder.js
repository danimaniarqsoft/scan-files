'use strict';

const leadinSpaces = require('./format-string').leadinSpaces
const Config = require('./diff-folder').Config

exports.printFolder = function (leftTree, rightTree) {
    var context = {}
    context.info = []
    var deep = - Config.TAB_SIZE
    printTreeElements(leftTree, context, deep)
  }
  
  var printTreeElements = function (tree, context, deep) {
    deep = deep + Config.TAB_SIZE;
    tree.children.forEach(currentFile => {
      if (currentFile.isPresent === false || currentFile.isPresent === undefined) {
        console.log(leadinSpaces(deep, currentFile.name))
      }
      if (currentFile.children) {
        printTreeElements(currentFile, context, deep)
      }
    });
  }
