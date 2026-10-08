"use server"
import connectWithDB from "../connections/mongdb";

async function addUser(data:any){
    try{
        //connect with server & database, returns DB Reference
 const db = await connectWithDB();
 if(db){
    //connect with collection, return collection reference
const collection =  db?.collection("users");

//inserting the data
const data = await collection?.insertOne({name:"Vikram",city:"hyd"});
if(data){
console.log(data)
}else {
    throw Error("Failed to Insert Data")
}

 }else{
    throw Error("Failed to connect with Databae")
 }
    }
    catch(error){
        console.log(error)
    }
 
 






}

export default addUser