const { isUtf8 } = require("buffer");
const fs=require("fs");
const data=fs.readFileSync("./data.txt","utf-8");

// console.log(data.toString());
console.log(data)