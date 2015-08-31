/**
 * Created by banzalik on 8/31/15.
 */
module.exports = function () {
    var Parser = require('../../node_modules/ua-parser-js/dist/ua-parser.min.js'),
        ua = new Parser();

    return ua.getResult();
};
