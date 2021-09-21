"use strict";
exports.__esModule = true;
exports.Point = void 0;
var Point = /** @class */ (function () {
    // private x:number ;
    // private y: number ;
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(Point.prototype, "X", {
        //getters
        get: function () {
            return this.x;
        },
        //setters
        set: function (value) {
            if (value < 0)
                throw new Error('Error : negatif value');
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "Y", {
        get: function () {
            return this.y;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('Error : negatif value');
            this.y = value;
        },
        enumerable: false,
        configurable: true
    });
    //
    Point.prototype.drawPoint = function () {
        //.....
        console.log("X: " + this.x + " , Y:" + this.y);
    };
    Point.prototype.getDistance = function (point) {
        //.....
    };
    return Point;
}());
exports.Point = Point;
