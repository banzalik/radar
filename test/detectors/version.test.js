/*global describe, it, expect*/
describe('version', function () {
    it('version package.json', function () {
        var a = require('../../lib/detectors/version.js'),
            b = require('json!../../package.json');

        expect(a).toEqual(b.version);
    });
});
