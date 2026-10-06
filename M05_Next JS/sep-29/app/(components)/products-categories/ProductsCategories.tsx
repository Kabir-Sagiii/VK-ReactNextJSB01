import React from 'react'
import Link from 'next/link'
function ProductsCategories() {
  return (
   <section className="flex flex-col items-center justify-evenly text-blue-500">
               <Link href="/products/mens">Mens</Link>
               <Link href="/products/womens">Womens</Link>
               <Link href="/products/kids">Kids</Link>
          </section>
  )
}

export default ProductsCategories