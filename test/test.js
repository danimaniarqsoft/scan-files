var scan = require("../main");

scan.scan("/home/daniel/anaconda3/doc/global" , function (files) {
    console.log(files);
});