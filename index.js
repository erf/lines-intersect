"use strict";

function on_seg(xi, yi, xj, yj, xk, yk) {
    return (xi <= xk || xj <= xk) && (xk <= xi || xk <= xj) &&
        (yi <= yk || yj <= yk) && (yk <= yi || yk <= yj);
}

function dir(xi, yi, xj, yj, xk, yk) {
    var a = (xk - xi) * (yj - yi);
    var b = (xj - xi) * (yk - yi);
    return a < b ? -1 : a > b ? 1 : 0;
}

function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
    var d1 = dir(x3, y3, x4, y4, x1, y1);
    var d2 = dir(x3, y3, x4, y4, x2, y2);
    var d3 = dir(x1, y1, x2, y2, x3, y3);
    var d4 = dir(x1, y1, x2, y2, x4, y4);
    return (((d1 > 0 && d2 < 0) || (d1 < 0 && d2 > 0)) && 
            ((d3 > 0 && d4 < 0) || (d3 < 0 && d4 > 0))) ||
             (d1 === 0 && on_seg(x3, y3, x4, y4, x1, y1)) ||
             (d2 === 0 && on_seg(x3, y3, x4, y4, x2, y2)) ||
             (d3 === 0 && on_seg(x1, y1, x2, y2, x3, y3)) ||
             (d4 === 0 && on_seg(x1, y1, x2, y2, x4, y4));
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = intersect;
}

