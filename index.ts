interface Vehicle{
    start:()=>void,
    model:string,
    make:number,
    year:number
}


class Car implements Vehicle{
    public model:string
    public make:number
    public year:number
    constructor(model:string,year:number,make:number){
        this.model = model;
        this.year = year;
        this.make = make;
    }
    start():void{
        console.log('engine start')
    }
}

const car = new Car('Toyota',2022,2028);

console.log(car.start())

