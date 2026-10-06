import React from 'react'
import Link from 'next/link'
function Products() {
  return (
    <div>
        <h1 className='text-green-800 text-6xl m-10'>Products Page</h1>
       <Link href="/product-details/1" className='text-blue-600 m-10'>Product 1</Link>
       <Link href="/product-details/2" className='text-blue-600 m-10'>Product 2</Link>
       <Link href="/product-details/3" className='text-blue-600 m-10'>Product 3</Link>
    </div>
  )
}

export default Products