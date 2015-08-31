/*global describe, it, expect, jasmine, spyOn, beforeEach, afterEach, beforeAll, define*/
describe('getScreenSize', function () {
    it('getScreenSize', function () {
        var getScreenSize = require('../../lib/detectors/getScreenSize.js');

        expect(getScreenSize()).toEqual([window.screen.width, window.screen.height]);
    });
});
