import {useContext,useEffect,useState} from 'react'
import "./ProductDetails.css"
import { getSepcificProduct } from '../../services/product'
import { ProductIdContext } from '../../context/productContext'
function ProductDetails() {
   const {id} = useContext(ProductIdContext)
   const [details,setDetails] = useState(null)

   useEffect(()=>{
    console.log("called",id)

    if(id){
getSepcificProduct(id).then((res)=>{
          setDetails(res.data)
    }).catch(()=>{
        alert("Failed to Fetch Product")
    })
    }
   },[id])

  return (
    <div className='product-details'>
        {
            details && <div> 
             
             <img src={details.image} alt="" width={"320"} height={430} />
            <div>
                <h1>{details.title}</h1>
            </div>
            </div>
        }
    </div>
  )
}

export default ProductDetails