"use server"
import connectWithDB from "../connections/mongdb";
async function getUsers(){
    try {
    // access db
  const db = await connectWithDB()
    // access collection
  const collection   =  db?.collection("users")
    //fetch or access the data from the collection
     const data = await collection?.find().toArray();
     console.log(data)

    }catch(error){
        console.log(error)
    }

}

export default getUsers