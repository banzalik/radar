/*global describe, it, expect, jasmine, spyOn, beforeEach, afterEach, beforeAll, define*/
/*global describe, it, expect*/
describe('getRootElement', function () {
    it('getRootElement', function () {
        var a = require('../../lib/detectors/getRootElement.js');
        expect(a()).toEqual(document.documentElement);
    });
});
