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
    // private x:number ;
    // private y: number ;

    constructor ( private x?:number, private y? : number ) {
    }

    //getters
    get X () {
        return this.x
    }
    get Y () {
        return this.y
    }

    //setters
    set X( value){
        if (value<0) throw new Error('Error : negatif value')
        this.x = value
    }
    set Y( value){
        if (value<0) throw new Error('Error : negatif value')
        this.y = value
    }
    //
    drawPoint () {
        //.....
        console.log(`X: ${this.x} , Y:${this.y}`)
    }
    getDistance( point:Point) {
        //.....
    }
}


let point = new Point(10,20);
let point2 = new Point()

let x = point.X
point.X = 10
point.X = -1
point.drawPoint()