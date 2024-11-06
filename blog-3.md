Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.


Ans: At 3.3 module Mezbaul abedin persian vai tech us why Type gurad is important and clearly understand this topic

Typeguard is need for checking type and perform the operation. If you do number operation but provide string boolean or else you operation not work properly or you do string operation,but you give number so it does not work. Or you use single function to work different type of Class you need typegurads.

Varrious of typeguards:

First: typeof TypeGuard

example return typeof value === 'string';

you use when need to check type

Second: instanceof TypeGurad

you have two object and use one function you need this typeguard.

example:

class Dog {
  bark() {
    console.log("Woof!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}


function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else if (animal instanceof Cat) {
    animal.meow();
  }
}


third: 

in Type Gurad

it is also include oop class base but make single function and perform operator

type NormalUser = {
        name: string 
    }
    type AdminUser = {
        name: string;
        role:'admin'
    }


const getUser = (user: NormalUser | AdminUser)=>{
         if('role' in user){
            console.log('admin user');
         }
         else{
            console.log('user role');
            
         }
}










