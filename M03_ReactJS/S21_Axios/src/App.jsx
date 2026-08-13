import { useState } from 'react'
import Navbar from './components/nav-bar/Navbar'
import Home from "./pages/home/Home"
import { Routes,Route } from 'react-router-dom'
import Products from './pages/products/Products'
import ProductDetails from './pages/product-details/ProductDetails'
import { ProductIdContext } from './context/productContext'
function App() {
  const [id,setId] = useState(null)
  return (
    <div>
      <Navbar />
      <ProductIdContext value={{id,setId}}>
         <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/products" element={<Products />}/> 
          <Route path="/product-details" element={<ProductDetails />} /> 
          
         </Routes>
      </ProductIdContext>
      
    </div>
  )
}

export default App