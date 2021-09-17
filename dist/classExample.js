var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserClass = /** @class */ (function () {
    function UserClass(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    UserClass.prototype.changeUnchangableName = function () {
        // this.unchangableName = "foo"; // This will result in error as it is readonly
    };
    UserClass.prototype.getFullname = function () {
        return this.firstName + ' ' + this.lastName;
    };
    UserClass.maxAge = 50;
    return UserClass;
}());
var userClassInstance = new UserClass("monster", "lessons", 20);
//We can access everything here except the age
// console.log(userClassInstance.age); //this will result in an error
//static properties can't be accessed by instance
// console.log(userClassInstance.maxAge); //Wrong
//static properties can be accessed only by class name
console.log(UserClass.maxAge); //Right
var UserClassImplementInterface = /** @class */ (function () {
    function UserClassImplementInterface() {
    }
    //If a class implements an interface, then the class must have all the properties inside and interface
    UserClassImplementInterface.prototype.getFullname = function () {
        return "foo";
    };
    return UserClassImplementInterface;
}());
//This isn't allowed
// class UserClassImplementInterface implements UserInterfaceForClass{
//     //If a class implements an interface, then the class must have all the properties inside and interface
//  }
//class inheritence
//Admin will have everything from UserClass as well as from Admin
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(UserClass));
var admin = new Admin('Foo', "Bar", 10);
console.log(admin.firstName);
//We can access everything from admin instance except the private properties and static properties
