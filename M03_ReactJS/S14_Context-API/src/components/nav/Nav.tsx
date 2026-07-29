import React from 'react'
import "./Nav.css"
function Nav({logout}) {
  return (
    <div className='nav'>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Nav