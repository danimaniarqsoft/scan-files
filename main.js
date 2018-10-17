'use strict';

const fs = require('fs');
const path = require('path');
const dirTree = require('directory-tree');
const tab = 4;

exports.diff = function (leftTree, rightTree) {
    var context = {}
    var deep = - tab
    context.info = []
    return diffFolder(leftTree, rightTree, context, deep)
}

var diffFolder = function (leftTree, rightTree, context, deep) {
    deep = deep + tab;
    leftTree.children.forEach(currentLeftFile => {
        var rightFileFinded = getFileInRightFolder(currentLeftFile, rightTree.children)
        context.info.push(addSpaces(deep, currentLeftFile.name))
        if (rightFileFinded) {
            currentLeftFile.isPresent = true
            if (currentLeftFile.type == 'directory') {
                diffFolder(currentLeftFile, rightFileFinded, context, deep)
            }
        } else {
            currentLeftFile.isPresent = false
        }
    });
    context.result = leftTree;
    return context
}

var getFileInRightFolder = function (currentFolder, children) {
    var element = null
    children.forEach(testFolder => {
        if (currentFolder.name.toString() === testFolder.name.toString()) {
            element = testFolder
        }
    })
    return element
}

var addSpaces = function (deep, cadena) {
    var spaces = ''
    for (let index = 0; index < deep; index++) {
        spaces = spaces + ' '
    }
    return spaces + cadena
}

exports.printFolder = function (leftTree, rightTree) {
  var context = {}
  context.info = []
  var deep = - tab
  printTreeElements(leftTree, context, deep)
}

var printTreeElements = function (tree, context, deep) {
  deep = deep + tab;
  tree.children.forEach(currentFile => {
      if (currentFile.isPresent === false || currentFile.isPresent === undefined) {
          console.log(addSpaces(deep, currentFile.name))
      }
      if (currentFile.children) {
          printTreeElements(currentFile, context, deep)
      }
  });
}
