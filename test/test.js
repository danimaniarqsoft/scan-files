'use strict'

var assert = require('assert');

const dirTree = require('directory-tree');
const diff = require('../main').diff
const printFolder = require('../util/print-folder').printFolder
const path = require('path')
const fs = require('fs')
const basepath = 'resources'

var leftStrPath = path.join(__dirname, basepath, 'repository-template.json')
var rightStrPath = path.join(__dirname, basepath, 'rightStr')
var leftTree = JSON.parse(fs.readFileSync(leftStrPath, 'utf8'));
var rightTree = dirTree(rightStrPath)

var difference = diff(leftTree, rightTree)
describe('Diff', function () {
    it('should return -1 when the value is not present', function () {
        assert.equal(difference.result.name, 'repository');
    });
});