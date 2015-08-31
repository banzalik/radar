/*global window, describe, it, expect, jasmine, spyOn, beforeEach, afterEach, beforeAll, define*/
describe('getViewportSize', function () {
    it('getViewportSize', function () {
        var ua = require('../../lib/detectors/getUa.js')();

        expect(ua.ua).toEqual(window.navigator.userAgent);
    });
});
