//Object
const statuses = {
    notStarted: 0,
    inProgress: 1,
    done: 2,
};

console.log(statuses.inProgress); //Output 1


// The above can be rewritten as enum

enum Status {
    NotStarted,
    InProgress,
    Done,
} // by default the values foe each is 0, 1, 2, ..... and so on

console.log(Status.InProgress); //Output 1

//Enums are useful as they can also defined as datatypes

let notStartedStatus: Status = Status.NotStarted;

// notStartedStatus = "foo"; //This is invalid as notStartedStatus is of type Status and not string

//if we want to assign specific value we can define as 

enum StatusModified {
    NotStarted = "notStarted",
    InProgress = "inProgress",
    Done = "done",
}

console.log(StatusModified.InProgress); //Output "inProgress"

//enums can be used inside the interfaces too
interface Task {
    id: string;
    status: Status;
}