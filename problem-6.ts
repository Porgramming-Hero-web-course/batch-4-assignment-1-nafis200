{
    interface profile {
        name: string;
        age:number;
        email:string
    }

    type profilePartial = Partial<profile>

    type updatefunction = (x: object,y:object)=>object

    const updateProfile: updatefunction = (myProfile,x)=>{
          return {...myProfile,...x}
    }

    const myProfile: profilePartial={
        name: "Alice",
        age: 25,
        email: "alice@example.com"
    }
    console.log(updateProfile(myProfile, { age: 26 }));

}