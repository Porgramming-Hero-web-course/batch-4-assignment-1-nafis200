

{
    type Circle = {
        shape:"circle",
        radius: number
    }

    type Rectangle = {
        shape: "rectangle",
        width:number,
        height:number
    }

    type Shape = Circle | Rectangle


    type CalculateArea = (param: Circle | Rectangle)=>number

    const calculateShapeArea:CalculateArea = (param)=>{
        
        if(param.shape === 'circle'){
            return Math.PI * param.radius * param.radius
        }
        else if(param.shape === 'rectangle'){
             return param.height * param.width
        }
        else{
           return 0
        }
    }

    
    const circleArea : number = calculateShapeArea({ shape: "circle", radius: 5 });

    const rectangleArea: number = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
      });

      console.log(circleArea);
      console.log(rectangleArea);
      
      
      
    
}

