 const fspromises=require("fs/promises");

 const read= async()=>{
    try{
        const data= await fspromises.readFile("./data.txt","utf-8");
    console.log(data);
    }catch(error){
console.log(error.message)
    }
 }
read();




 const write = async()=>{
    try{
        const  newdata = "this is my work"
     await fspromises.writeFile("./data2.txt",newdata,"utf-8");
    
    }catch(error){
console.log(error.message)
    }
 }
read();
write();

 