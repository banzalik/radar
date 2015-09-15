/*global describe, it, expect*/
describe('String', function () {
    describe('trim', function () {
        it('trim', function () {
            var trim = require('../../lib/string/string.js'),
                str = '       Hello World!        ';

            expect(trim.trim(str)).toEqual('Hello World!');
        });
    });
});
