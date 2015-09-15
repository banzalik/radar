/*global describe, it, expect*/
describe('getUa', function () {
    it('getUa', function () {
        var getViewportSize = require('../../lib/detectors/getViewportSize.js'),
            karmaConfig = require('../../karma.conf.js')().screen;

        expect(getViewportSize()).toEqual([karmaConfig.width, karmaConfig.height]);
    });
});
