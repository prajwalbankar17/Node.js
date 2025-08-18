//import EventEmitter class
// const  EventEmitter = require('events');

//create an instance of EventEmitter
// const emitter = new EventEmitter();

////////////////////////////////////////////////////////

//1. Define an event listener (addListener)
// emitter.on("greet", () => {
//     console.log("Hello Prajwal")
// })
// //2. Trigger (emit) the "greet" event
// emitter.emit("greet");

//////////////////////////////////////////////////////////

//pass arguments whille emitting 
// emitter.on("greet", (username) => {
//     console.log(`Hello ${username}`)
// })
// //2. Trigger (emit) the "greet" event
// emitter.emit("greet","Prajwal Bankar");


///////////////////////////////////////////////////////////

// emitter.on("greet", (arg) => {
//     console.log(`Hello ${arg.username}, You are a ${arg.prof}`)
// })
// //2. Trigger (emit) the "greet" event
// emitter.emit("greet",{username:"Prajwal Bankar", prof:"Full stack Developer"});



///////////////////////////////////////////////////////////////////////////////////
//////////////////////////Assignment//////////////////////////


const EventEmitter = require("events")
const emitter = new EventEmitter();

const eventCount = {
    "user-login": 0,
    "user-purchase": 0,
    "profile-update": 0,
    "user-logout": 0
}

emitter.on("user-login", (username) => {
    eventCount["user-login"]++;
    console.log(`${username} has logged in.`);
});

emitter.on("user-purchase", (username, item) => {
    eventCount["user-purchase"]++;
    console.log(`${username} has purchased ${item}.`);
});

emitter.on("profile-update", (username, field) => {
    eventCount["profile-update"]++;
    console.log(`${username} has updated their ${field}.`);
});

emitter.on("user-logout", (username) => {
    eventCount["user-logout"]++;
    console.log(`${username} has logged out.`);
});

//Show the summary 
emitter.on("summary", () => {
    console.log(eventCount);
});

emitter.emit("user-login","Prajwal");
emitter.emit("user-purchase", "Prajwal", "Laptop");
emitter.emit("profile-update", "Prajwal", "email");
emitter.emit("user-logout","Prajwal");

emitter.emit("summary");









