

{
    
    
type Add =  (param:number[])=>number

const sumArray: Add = (param)=>{
     let sum: number = 0;
     
     for(let i = 0; i < param.length; i++){
        sum = sum + param[i]
     }

     return sum
}


let SumofNumber: number = 0

SumofNumber = sumArray([1, 2, 3, 4, 5]);

console.log(SumofNumber);

}
