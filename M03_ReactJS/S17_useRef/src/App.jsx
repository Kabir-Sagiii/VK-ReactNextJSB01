import React from 'react'
import {Route,Routes,Navigate} from "react-router-dom"
import Navbar from './components/nav-bar/Navbar'
import Home from './pages/home/Home'
import Products from './pages/products/Products'
import Profile from './pages/profile/Profile'
import Contactus from './pages/contactus/Contactus'
import PageNotFound from './components/page-not-found/PageNotFound'
import Details from './components/details/Details'
import Orders from './components/orders/Orders'
import FailedOrder from './components/failed-orders/FailedOrder'
import PaymentHistory from './components/payment-history/PaymentHistory'
import ChangePassword from './components/change-password/ChangePassword'
import Count from './components/use-ref/Count'
function App() {
  return (
    <div>
      <Navbar />
     
     <Count />
     {/* <Routes>
      <Route path={"/"} element={<Home />} />

     <Route path={"/profile"} element={<Profile />}>
      <Route path={""} element={<Navigate to="details"/>}/>
        <Route path={"details"} element={<Details />} />
        <Route path={"orders"} element={<Orders />} />
        <Route path={"payment-history"} element={<PaymentHistory />} />
        <Route path={"changepassword"} element={<ChangePassword />}/>
        <Route path={"failed-orders"} element={<FailedOrder />} />
     
     </Route>



     <Route path={"/products"} element={<Products />}/>
     <Route path={"/contactus"} element={<Contactus />}/>
     <Route path={"*"} element={<PageNotFound />}/>
     </Routes> */}

    </div>
  )
}

export default App