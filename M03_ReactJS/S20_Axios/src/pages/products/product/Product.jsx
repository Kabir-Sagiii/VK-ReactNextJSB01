import {useContext} from 'react'
import "./Product.css"
import { useNavigate } from 'react-router-dom'
import { ProductIdContext } from '../../../context/productContext'
function Product({product:{image,title,id,price,description}}) {
            const {setId}  = useContext(ProductIdContext)
         const navigate=   useNavigate()
  return (
    <div className='product'>
      <img src={image} width={"100%"} height={230} alt="" />
      <h3>{title.slice(0,21)}</h3>
      <h4>{id}</h4>
      <p>$ {price}</p>
      <p>{description.slice(0,90)}</p>
      <button id="product-details-btn" onClick={()=>{
        setId(id)
        navigate("/product-details")
      }}>Product Details</button>
      <button>Add To Cart</button>
    </div>
  )
}

export default Product