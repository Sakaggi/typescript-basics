class UserClass{
    // By default, everything is public in a class
    firstName: string
    lastName: string
    static readonly maxAge = 50;

    // If we want something to be accessed inside the class, we should keep it private
    private age: number

    // If we want something readonly then we should use readonly
    readonly unchangableName: string;

    constructor(firstName: string, lastName: string, age: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    changeUnchangableName(): void {
        // this.unchangableName = "foo"; // This will result in error as it is readonly
    }

    getFullname(): string {
        return this.firstName + ' ' + this.lastName;
    }
}

const userClassInstance = new UserClass("monster", "lessons", 20);
//We can access everything here except the age
// console.log(userClassInstance.age); //this will result in an error

//static properties can't be accessed by instance
// console.log(userClassInstance.maxAge); //Wrong

//static properties can be accessed only by class name
console.log(UserClass.maxAge); //Right

// class with interface
interface UserInterfaceForClass{
    getFullname(): string;
}

class UserClassImplementInterface implements UserInterfaceForClass{
   //If a class implements an interface, then the class must have all the properties inside and interface
   getFullname(): string{
       return "foo";
   }
}

//This isn't allowed
// class UserClassImplementInterface implements UserInterfaceForClass{
//     //If a class implements an interface, then the class must have all the properties inside and interface
 
//  }


//class inheritence
//Admin will have everything from UserClass as well as from Admin
class Admin extends UserClass {
    private editor: string

    setEditor(editor: string): void {
        this.editor = editor
    }

    getEditor(): string {
        return this.editor;
    }
}

const admin = new Admin('Foo', "Bar", 10);
console.log(admin.firstName);

//We can access everything from admin instance except the private properties and static properties
