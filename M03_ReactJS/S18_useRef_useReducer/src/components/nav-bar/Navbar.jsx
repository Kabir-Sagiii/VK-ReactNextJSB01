import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <div className='nav-bar'>
        <section className='brand'>
            <h1>Routing Concept</h1>
        </section>
        <section className='links'>
              <Link to="/">Home</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/products">Products</Link>
              <Link to="/contactus">ContactUs</Link>
        </section>
    </div>
  )
}

export default Navbar