'use strict'

const dirTree = require('directory-tree');
const diff = require('../main').diff
const printFolder = require('../util/print-folder').printFolder
const path = require('path')
const https = require('https')
const httpFolder = require('../util/http-folder')
const leadinSpaces = require('../util/format-string').leadinSpaces

const basepath = 'resources'
var leftStrPath = path.join(__dirname, basepath, 'leftStr')
var rightStrPath = path.join(__dirname, basepath, 'rightStr')
var leftTree = httpFolder.getJsonFromRepository()
var rightTree = dirTree(rightStrPath)
var difference = diff(leftTree, rightTree)
//console.log(difference.result)
//console.log(JSON.stringify(leftTree, null, 4))
printFolder(difference.result)
//console.log(JSON.stringify(difference.result, null, 4))