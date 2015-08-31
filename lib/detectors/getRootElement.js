/**
 * Created by banzalik on 8/31/15.
 */
module.exports = function () {
    var docElem = document.documentElement;
    return "CSS1Compat" == document.compatMode ? docElem : document.body || docElem
};
