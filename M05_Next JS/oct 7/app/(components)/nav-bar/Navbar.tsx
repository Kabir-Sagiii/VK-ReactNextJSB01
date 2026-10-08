
import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { UserRoundPen,ShoppingCartPlus } from 'lucide-react'
function Navbar() {
  return (
    <div className='shadow-xl h-[90px] grid grid-cols-[25%_25%_40%_10%]'>
           <section className='flex items-center justify-center '>
            <h1 className='text-5xl italic text-green-700 font-bold'>Dude's-Mart</h1>
           </section>
           <section className='flex justify-start items-center'>
            <Field>
     
      <ButtonGroup>
        <Input id="input-button-group" placeholder="Type to search..." className='p-5' />
        <Button variant="outline" className="p-5">Search</Button>
      </ButtonGroup>
    </Field>
           </section>
           <section className='flex justify-evenly items-center text-xl'>
            <Link href="/" className=' text-blue-700'>Home</Link>
            
              <Link href="/products" className='text-blue-700'>Products</Link>
              {/* <Link href="/contactus" className='text-blue-700'>Women's</Link> */}
               <Link href="/contactus" className='text-blue-700 '>Contactus</Link>
                <Link href="/reviews" className='text-blue-700 '>Reviews</Link>
           </section>
           <section className='flex justify-start items-center'>
            <ShoppingCartPlus size={32} color="#235d0fff" className='ml-7' />
          <Link href="/profile">  <UserRoundPen size={32} color="#235d0fff" className='ml-5' /></Link>
           </section>
    </div>
  )
}

export default Navbar