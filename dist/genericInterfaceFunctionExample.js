//Generics for function
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// <T> is generic interface. If we want specific, we can define an interface.
//Without that, by default obj will be of type any
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
//this is of type any|generic
var userNew1 = {
    name: "Jack"
};
//Now it is of type IUser
var userNew2 = {
    name: "Jack"
};
var result1 = addId(userNew1);
console.log("result 1", result1);
var result2 = addId(userNew2);
console.log("result 2", result2);
// The above would take any type
var result = addId("foo");
//However, if we want to be specific that it takes only object, we should write it as
var addIdToObject = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
// const result3 = addIdToObject<string>("foo"); // This will throw an error now
var result4 = addId(userNew2); // This will work as we are passing only the object
// data type: object => { meta: string }
var userWithGenericType1 = {
    name: "Jack",
    data: {
        meta: "foo"
    }
};
// data type => string array
var userWithGenericType2 = {
    name: "Jack",
    data: ["foo", "bar"]
};
// object type { meta: string },  object type string array
var userWithTwoGenericType1 = {
    name: "Jack",
    data: {
        meta: "foo"
    },
    meta: ["foo", "bar"]
};
// function examples
// export function append<T>(el:T, list: readonly T[]): T[];
// const updatedArray = append<string>("baz", ["foo", "bar"]);
//function to check if an array contains another string
// const searchStr = "foo";
// const hasSearchedString = any<string>((el: string) => el.contains(searchStr), [
//     "fooooo",
//     "bar",
//     "baz",
// ]);
