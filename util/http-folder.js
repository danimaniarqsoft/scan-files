'use strict';

const request = require('sync-request');
const JSON_RESOURCE = 'https://gist.githubusercontent.com/danimaniarqsoft/208ee2394f792a286ad67446c45ee2a4/raw/1c00d06e9e25a510bc3da7b94916f49d0fc6c4d5/repository-template.json'

exports.getJsonFromRepository = function () {
  var res = request('GET', JSON_RESOURCE);
  return JSON.parse(res.getBody('utf8'))
}
