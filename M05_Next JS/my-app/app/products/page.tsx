"use client"
import Link from "next/link"
import { useState,createContext } from "react"
function Products(){
    const [products,setProducts] = useState("Products Data")
    return (
        <div>
            <h1 className="text-2xl">Products Component :{products}</h1>
            <Link href="/">Back to Home Page</Link><br/><br/>
            <button onClick={()=>{
                setProducts("Products Updated")
            }} >Update</button>
        </div>
    )
}

export default Products