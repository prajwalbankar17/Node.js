import fs from "fs";

console.log("Start");

const data = fs.readFileSync("file.txt", "utf-8");
console.log("data:", data);



