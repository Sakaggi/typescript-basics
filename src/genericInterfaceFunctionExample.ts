//Generics for function

// <T> is generic interface. If we want specific, we can define an interface.
//Without that, by default obj will be of type any
const addId = <T>(obj: T) => {
    const id = Math.random().toString(16)
    return {
        ...obj,
        id
    }
}

//this is of type any|generic
const userNew1 = {
    name: "Jack",
};

interface IUser {
    name: string;
}
//Now it is of type IUser
const userNew2: IUser = {
    name: "Jack",
};

const result1 = addId(userNew1);
console.log("result 1", result1);

const result2 = addId(userNew2);
console.log("result 2", result2);

// The above would take any type
const result = addId<string>("foo");

//However, if we want to be specific that it takes only object, we should write it as
const addIdToObject = <T extends object>(obj: T) => {
    const id = Math.random().toString(16)
    return {
        ...obj,
        id
    }
}

// const result3 = addIdToObject<string>("foo"); // This will throw an error now

const result4 = addId(userNew2); // This will work as we are passing only the object



//Generics for Interface
// T and V are generally denote tfor generic types
interface IUserWithGenericType<T> {
    name: string;
    data: T;
}

// data type: object => { meta: string }
const userWithGenericType1: IUserWithGenericType<{ meta: string }> = {
    name: "Jack",
    data: {
        meta: "foo"
    }
}

// data type => string array
const userWithGenericType2: IUserWithGenericType<string[]> = {
    name: "Jack",
    data: ["foo","bar"]
}

//Interface with two generic types
interface IUserWithTwoGenericType<T, V> {
    name: string;
    data: T;
    meta: V;
}

// object type { meta: string },  object type string array
const userWithTwoGenericType1: IUserWithTwoGenericType<{ meta: string }, string[]> = {
    name: "Jack",
    data: {
        meta: "foo"
    },
    meta: ["foo","bar"]
}



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

