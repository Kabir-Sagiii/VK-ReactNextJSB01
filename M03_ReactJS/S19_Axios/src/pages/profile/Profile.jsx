import React from 'react'
import "./Profile.css"
import { Link,Outlet } from 'react-router-dom'
function Profile() {
  return (
    <div className='profile'>
      <section className='left-panel'>
         <Link to="details">Details</Link>
        <Link to="orders">My Orders</Link>

           <Link to="payment-history">Payment History</Link>
            <Link to="changepassword">Change Password</Link>
             <Link to="failed-orders">Failed Orders</Link>
      </section>

      <section className='right-panel'>
      <Outlet />
      </section>
    </div>
  )
}

export default Profile