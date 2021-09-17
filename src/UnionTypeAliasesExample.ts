//Union Type and Alias in Typescript

let username: string = 'alex'; //property is of type string

//If we want a property of multiple datatypes, we can use union operator
let pagename : string | number = "10";

//When the property is undefined at the declaration, we can use null type
let errorMessage : string | null = null;

interface UserInterface {
    name : string;
    surname : string;
}

// The user property can be null or of type userInterface
let user: UserInterface | null = null; 

//Type Aliases - create our own type

type ID = string;

//These two will mean the same
var id : string;
var id : ID;


type PopularTag = string;
//These two will mean the same
var popularTags : string[] = ["dragon", "coffee"];

//this is better and more readable
var popularTags : PopularTag[] = ["dragon", "coffee"];

// Mixing unions and type aliases
type MaybePopularTag = PopularTag | null;

const dragonsTag : MaybePopularTag = "dragon";


