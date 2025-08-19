// import fs from "fs";
const fs = require("fs"); 

console.log("Start");

const data = fs.readFileSync("file.txt", "utf-8");
console.log("data:", data);



