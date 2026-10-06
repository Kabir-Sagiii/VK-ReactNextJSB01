"use client"
import React from 'react'

function Profile() {
    console.log("Profile Component")
  return (
    <div>
         <h1 className='text-blue-800 text-6xl m-10'>Profile Page</h1>
         <button onClick={()=>{
            console.log("button is clicked")
         }}>click me</button>
    </div>
  )
}

export default Profile