//Types

let a : number;
let b : boolean;
let c : string;
let d : any;
let e : number[] = [10,20,30];
let f : any[] = [1,true,'a', false]

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color {Red = 0 , Green = 1 , Blue = 2}

let backGroundColor = Color.Blue

// type assertion
let message ;
message='abc'
// let endWithC =(<string> message).endsWith('c')
// let endWithCAnotherApproach =(message as string).endsWith('c')

// functions and arrow functions

let log = function (msg) {
    console.log (msg)
}

let arrowLog = (msg)=> console.log(msg)

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
    
    

class Point  {
    x:number ;
    y: number ;
    drawPoint () {
        //.....
        console.log(`X: ${this.x} , Y:${this.y}`)
    }
    getDistance( point:Point) {
        //.....
    }
}


let point = new Point();
point.x = 10
point.y = 20
point.drawPoint()