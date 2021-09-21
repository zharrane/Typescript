"use strict";
exports.__esModule = true;
var point_1 = require("./point");
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
var point = new point_1.Point(10, 20);
var point2 = new point_1.Point();
var x = point.X;
console.log(x);
point.X = 10;
point.X = -1;
point.drawPoint();
