{

 
    type Duplicate = (param:number[]) => number[]

    
    const removeDuplicates: Duplicate = (param)=>{
        
        let UniqueArray : number[] = []
        for(let i = 0; i < param.length; i++){
            if(!UniqueArray.includes(param[i])){
                UniqueArray.push(param[i])
            }
        }
       return UniqueArray
    }


    let arrayofNumber: number[]

    arrayofNumber = removeDuplicates([1, 2, 2, 3, 4, 4, 5])
    
    console.log(arrayofNumber);
    

}

