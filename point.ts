export class Point  {
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

