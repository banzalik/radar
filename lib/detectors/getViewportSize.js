/**
 * Created by banzalik on 8/31/15.
 */
module.exports = function () {
    var root = require("./getRootElement.js")();
    return [root.clientWidth, root.clientHeight]
};
