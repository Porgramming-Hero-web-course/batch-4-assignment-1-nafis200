{
    

type Validate = (T: object, Y: string[])=>boolean

type Person = {
    name: string,
    age:number,
    email:string
}

const validateKeys:Validate = (T, Y)=>{
     
     let x = true

     for(let i:number = 0; i < Y.length; i++){
           if(`${Y[i]}` in T){
                 
           }
           else{
             x = false
           }
     }

     return x
}

const person : Person = {
    name: 'Alice',
    age:25,
    email:'alice@example.com'
}

console.log(validateKeys(person, ["name", "age"]));



}