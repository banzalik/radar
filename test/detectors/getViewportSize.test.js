/*global describe, it, expect, jasmine, spyOn, beforeEach, afterEach, beforeAll, define*/
describe('getViewportSize', function () {
    it('getViewportSize', function () {
        var getViewportSize = require('../../lib/detectors/getViewportSize.js'),
            karmaConfig = require('../../karma.conf.js')().screen;

        expect(getViewportSize()).toEqual([karmaConfig.width, karmaConfig.height]);
    });
});
