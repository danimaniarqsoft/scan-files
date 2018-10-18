'use strict';

const fs = require('fs')
const path = require('path')
const dirTree = require('directory-tree')
const diffFolder = require('./util/diff-folder')
const Config = require('./util/diff-folder').Config
const leadinSpaces = require('./util/format-string').leadinSpaces
const printFolder = require('./util/print-folder').printFolder


exports.diff = function (leftTree, rightTree) {
  var context = {}
  var deep = - Config.TAB_SIZE
  context.info = []
  return diffFolder.diffFolder(leftTree, rightTree, context, deep)
}

exports.print = printFolder