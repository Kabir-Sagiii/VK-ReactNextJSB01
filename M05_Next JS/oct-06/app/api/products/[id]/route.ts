import { NextRequest } from "next/server"

export async function GET(request:NextRequest,{params}:{params:{id:string}}){

    console.log(await params) // {id:<value>}
    //action

    console.log(request.nextUrl.searchParams.get("price"))
      console.log(request.nextUrl.searchParams.get("category"))

     
    return Response.json({
        data:"Path Params are Working"
    })
    
}

// http://localhost:3000/api/products/