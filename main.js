//Types
var a;
var b;
var c;
var d;
var e = [10, 20, 30];
var f = [1, true, 'a', false];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var backGroundColor = Color.Blue;
// type assertion
var message;
message = 'abc';
// let endWithC =(<string> message).endsWith('c')
// let endWithCAnotherApproach =(message as string).endsWith('c')
// functions and arrow functions
var log = function (msg) {
    console.log(msg);
};
var arrowLog = function (msg) { return console.log(msg); };
// Custom types
// interface Point {
//     x:number,
//     y:number, 
//     drawPoint : ()=>void,
//     getDistance : ()=>void,
// }
//let drawPoint  = (point:Point) =>{
//     //....
// }
// let getDistance = (A:Point , B: Point) =>{
//     //....
// }
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.drawPoint = function () {
        //.....
        console.log("X: " + this.x + " , Y:" + this.y);
    };
    Point.prototype.getDistance = function (point) {
        //.....
    };
    return Point;
}());
var point = new Point();
point.x = 10;
point.y = 20;
point.drawPoint();
