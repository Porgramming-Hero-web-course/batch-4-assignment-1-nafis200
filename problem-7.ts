{

    class Car{

       constructor(public name: string, public model, public year:number) {}

       public getCarAge(){
          return 2024 - this.year
       }

    }

    const car = new Car("Honda", "Civic", 2018);
    
    let x: number = car.getCarAge();

    console.log(x);
    

}