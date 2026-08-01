import React from 'react'
import {Route,Routes} from "react-router-dom"
import Navbar from './components/nav-bar/Navbar'
import Home from './pages/home/Home'
import Products from './pages/products/Products'
import Profile from './pages/profile/Profile'
import Contactus from './pages/contactus/Contactus'
import PageNotFound from './components/page-not-found/PageNotFound'
function App() {
  return (
    <div>
      <Navbar />
     
     <Routes>
      <Route path={"/"} element={<Home />} />
     <Route path={"/profile"} element={<Profile />}/>
     <Route path={"/products"} element={<Products />}/>
     <Route path={"/contactus"} element={<Contactus />}/>
     <Route path={"*"} element={<PageNotFound />}/>
     </Routes>

    </div>
  )
}

export default App