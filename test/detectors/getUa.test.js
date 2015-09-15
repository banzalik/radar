/*global describe, it, expect*/
describe('getViewportSize', function () {
    it('getViewportSize', function () {
        var ua = require('../../lib/detectors/getUa.js')();

        expect(ua.ua).toEqual(window.navigator.userAgent);
    });
});
