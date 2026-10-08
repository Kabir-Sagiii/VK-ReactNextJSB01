import { NextRequest } from "next/server";

// Get Server Action
  export async function GET(request:NextRequest){

  const res =   await fetch("https://dummyjson.com/products");
    const data    =  await res.json()

     return Response.json(data)


  }








// export async function GET(){
// //pre-defined object : request and Response
// var dataResponse = {
//     results:[{name:"Sagar"},{name:"Kabir"}],
//     ok : true
// }
// return Response.json(dataResponse)

// }
// // Get : http://localhost:3000/api/products


// export async function POST(request:Request){

//   return Response.json({
//     result:"Working"
//   })
  
// }

// //Post : http://localhost:3000/api/products


// export async function PUT(request:Request){

//   return Response.json({
//     result:"Working"
//   })
  
// }

// export async function Delete(request:Request){

//   return Response.json({
//     result:"Working"
//   })
  
// }