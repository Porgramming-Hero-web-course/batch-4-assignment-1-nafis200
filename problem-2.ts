{

 
    type Duplicate = (param:number[]) => number[]

    
    const removeDuplicates: Duplicate = (param)=>{
        
        let UniqueArray : number[] = []
        for(let singleDigit of param){
            if(!UniqueArray.includes(singleDigit)){
                UniqueArray.push(singleDigit)
            }
        }
       return UniqueArray
    }


    let arrayofNumber: number[]

    arrayofNumber = removeDuplicates([1, 2, 2, 3, 4, 4, 5])
    
    console.log(arrayofNumber);
    

}

