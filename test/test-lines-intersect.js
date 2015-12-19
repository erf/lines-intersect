"use strict";

var assert      = require('assert');
var intersect   = require('../index');

describe('lines-intersect', function () {

    it('line segments intersect', function () {
        assert(intersect(0,0, 1,0, 0.5,0.5, 0.5,-0.5)===true);
    });

    it('line segments dont intersect', function () {
        assert(intersect(0,0, 1,0, 0.0,0.5, 1.0,0.5)===false);
    });

    it('line segments are the same -> should intersect', function () {
        assert(intersect(0,0, 1,0, 0,0, 1,0)===true);
    });

    it('line segments collinear -> should NOT intersect', function () {
        assert(intersect(0,0, 1,0, 1.5,0, 2.5,0)===false);
    });

    it('line segments share point -> should intersect', function () {
        assert(intersect(0,0, 1,0, 1,0, 2,0)===true);
    });

    it('line segments ... should intersect', function () {
        assert(intersect(0,0, 2,0, 0.5,-0.5, 0.5,1.5)===true);
    });

    it('lines intersect simple', function () {
        assert(intersect(0,0, 1,1, 0,1, 1,0)===true);
    });

});
