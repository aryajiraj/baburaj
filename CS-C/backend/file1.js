const { isUtf8 } = require("buffer");
const fs=require("fs");
 const data=fs.readFileSync("./data.txt","utf-8");

// console.log(data.toString());
 console.log(data)
 if(data.match("H")){
    console.log("H is present")
    const newdata=data.replace("H","AB")
    fs.writeFileSync("./data.txt", newdata,"utf-8");
 }

// fs.writeFileSync("./data1.txt", "Hello, this is my new work", "utf-8");//write word
// fs.writeFileSync("./data1.txt","ABES ", "utf-8");//overrride data
// fs.appendFileSync("./data1.txt", "  engineering collge","utf-8");//update data
// fs.renameSync("./data2.txt", "./data3.txt");

