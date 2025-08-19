// import fs from "fs";
const fs = require("fs"); 

//Syncronous Task
console.log("Start");

//Syncronous Task
const data = fs.readFileSync("file.txt", "utf-8");
console.log("data:", data);

//Asynchronous Task
fs.readFile("file.txt","utf-8", (err, data) => {
    if (err) throw err; 
    console.log(data);
})

console.log("End");
