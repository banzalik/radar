/*global document, describe, it, expect, jasmine, spyOn, beforeEach, afterEach, beforeAll, define*/
/*global describe, it, expect*/
describe('getDocumentTitle', function () {
    it('getDocumentTitle', function () {
        var title = require('../../lib/detectors/getDocumentTitle.js')();

        expect(title).toEqual(document.title);
    });

    it('set getDocumentTitle', function () {
        var staticTitle = 'Some title',
            title = require('../../lib/detectors/getDocumentTitle.js');

        document.title = staticTitle;

        expect(title()).toEqual(staticTitle);
    });

    it('set getDocumentTitle by tag', function () {
        var staticTitle = 'Some title 2',
            title = require('../../lib/detectors/getDocumentTitle.js');

        document.getElementsByTagName('title')[0].innerHTML = staticTitle;

        expect(title()).toEqual(staticTitle);
    });

    it('set getDocumentTitle by {}', function () {
        var staticTitle = '[object Object]',
            title = require('../../lib/detectors/getDocumentTitle.js');

        document.title = {};

        expect(title()).toEqual(staticTitle);
    });
});
