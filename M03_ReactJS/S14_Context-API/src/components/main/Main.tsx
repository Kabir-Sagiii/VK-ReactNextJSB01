import React from 'react'
import Login from '../../pages/login/Login'
import Home from '../../pages/home/Home'
function Main({isLoggedIn}) {
  return (
    <div>
      {
        isLoggedIn ? <Home /> : <Login />
      }

      
      
    </div>
  )
}

export default Main