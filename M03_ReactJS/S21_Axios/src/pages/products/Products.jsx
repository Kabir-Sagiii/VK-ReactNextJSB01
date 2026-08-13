import {useState,useEffect} from 'react'
import "./Products.css"
import Product from './product/Product'
import Categories from './categories/Categories'
import { getAllProducts } from '../../services/product'
function Products() {
  const [products,setProducts] = useState(null)

   useEffect(()=>{
     getAllProducts().then((res)=>{
      // console.log(res)
      setProducts(res.data)
     }).catch(()=>{
      alert("Failed to Fetch The Products Data")
     })
   },[])

   
  return (
    <div className='products'>

      <section className='categories'>
           {
            products && <Categories />
           }
      </section>


      <section className='all-products'>
           {
             products ? <div>
                   {
                    products.map((product)=>{
                      return <Product product={product} />
                    })
                   }
             </div> : <h1>No Products To Display</h1>
           }
      </section>
    </div>
  )
}

export default Products