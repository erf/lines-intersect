"use strict";

var assert      = require('assert');
var intersect   = require('../index');

describe('line-segments-intersect', function () {

    it('line segments intersect', function () {
        var result = intersect(0,0, 1,0, 0.5,0.5, 0.5,-0.5);
        assert(result===true);
    });

    it('line segments dont intersect', function () {
        var result = intersect(0,0, 1,0, 0.0,0.5, 1.0,0.5);
        assert(result===false);
    });

    it('line segments are the same -> should intersect', function () {
        var result = intersect(0,0, 1,0, 0,0, 1,0);
        assert(result===true);
    });

    it('line segments collinear -> should NOT intersect', function () {
        var result = intersect(0,0, 1,0, 1.5,0, 2.5,0);
        assert(result===false);
    });

    it('line segments share point -> should intersect', function () {
        var result = intersect(0,0, 1,0, 1,0, 2,0);
        assert(result===true);
    });

    it('line segments ... should intersect', function () {
        var result = intersect(0,0, 2,0, 0.5,-0.5, 0.5,1.5);
        assert(result===true);
    });

    it('lines intersect simple', function () {
        assert(intersect(0,0, 1,1, 0,1, 1,0)===true);
    });

});
