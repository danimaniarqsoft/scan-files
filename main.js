'use strict';

const fs = require('fs')
const path = require('path')
const dirTree = require('directory-tree')
const diffFolder = require('./util/diff-folder')
const Config = require('./util/diff-folder').Config
const leadinSpaces = require('./util/format-string').leadinSpaces

exports.diff = function (leftTree, rightTree) {
  var context = {}
  var deep = - Config.TAB_SIZE
  context.info = []
  return diffFolder.diffFolder(leftTree, rightTree, context, deep)
}

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
