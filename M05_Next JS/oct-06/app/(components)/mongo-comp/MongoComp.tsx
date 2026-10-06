"use client"
import React from 'react'
import addUser from '@/app/actions/addUser'
function MongoComp() {
  return (
    <div className='m-10'>
        <h1 className='text-5xl text-green-800'>Mongodb Integration</h1>
        <button onClick={addUser} className='p-2 bg-blue-600 mt-10 mx-5 text-white'>Insert New Data</button>
        <button className='p-2 bg-yellow-600 mt-10 text-white mx-'>Access Data From DB</button>

    </div>
  )
}

export default MongoComp