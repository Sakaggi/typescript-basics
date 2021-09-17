//Object
var statuses = {
    notStarted: 0,
    inProgress: 1,
    done: 2
};
console.log(statuses.inProgress); //Output 1
// The above can be rewritten as enum
var Status;
(function (Status) {
    Status[Status["NotStarted"] = 0] = "NotStarted";
    Status[Status["InProgress"] = 1] = "InProgress";
    Status[Status["Done"] = 2] = "Done";
})(Status || (Status = {})); // by default the values foe each is 0, 1, 2, ..... and so on
console.log(Status.InProgress); //Output 1
//Enums are useful as they can also defined as datatypes
var notStartedStatus = Status.NotStarted;
// notStartedStatus = "foo"; //This is invalid as notStartedStatus is of type Status and not string
//if we want to assign specific value we can define as 
var StatusModified;
(function (StatusModified) {
    StatusModified["NotStarted"] = "notStarted";
    StatusModified["InProgress"] = "inProgress";
    StatusModified["Done"] = "done";
})(StatusModified || (StatusModified = {}));
console.log(StatusModified.InProgress); //Output "inProgress"
