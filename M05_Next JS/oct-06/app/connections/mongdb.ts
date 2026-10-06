"use server"
import {MongoClient} from "mongodb"
  const client = new MongoClient("mongodb://localhost:27017")

async function connectWithDB(){
   
   try{
     //it will connect with Mongodb Server
const data = await client.connect()
if(data===null) {
  throw Error("failed to connect Mongodb Server")
}
return client.db("usersdb")
   }catch(error){
    console.log(error)
   }
}



export default connectWithDB