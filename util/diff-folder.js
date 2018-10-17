const fs = require('fs')
const path = require('path')
const dirTree = require('directory-tree')
const leadinSpaces = require('./format-string').leadinSpaces
const TAB_SIZE = 4
const Config = {}
Config.TAB_SIZE = TAB_SIZE

exports.Config = Config

exports.diffFolder = function (leftTree, rightTree, context, deep) {
    deep = deep + TAB_SIZE;
    leftTree.children.forEach(currentLeftFile => {
        var rightFileFinded = getFileInRightFolder(currentLeftFile, rightTree.children)
        context.info.push(leadinSpaces(deep, currentLeftFile.name))
        if (rightFileFinded) {
            currentLeftFile.isPresent = true
            if (currentLeftFile.type == 'directory') {
                this.diffFolder(currentLeftFile, rightFileFinded, context, deep)
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
