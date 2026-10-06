import React from 'react'

async function Mens() {

  const res= await fetch("http://localhost:3000/api/products") // get
          const data = await res.json();
          console.log(data)

  return (
    <div className='m-10'>
      <h1 className='text-5xl text-green-800'>Mens Category Page</h1>
      {
        data.products.map(({title,images}:any)=>{
          return <div className='mt-10'>
            <img src={images[0]} alt="" className='w-[100px] h-[100px]' />
            <h3 className='text-red-700'>{title}</h3>
            <hr />
          </div>
        })
      }
    </div>
  )
}

export default Mens