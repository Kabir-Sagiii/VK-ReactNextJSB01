import { useState } from "react"
import Main from "./components/main/Main"
import Nav from "./components/nav/Nav"
import LoginContext from "./context/loginContext"
function App(){
 const [isLoggedIn,setIsLoggedIn] =useState(true)

 const login = ()=>{
  setIsLoggedIn(true)
 }

 const logout = ()=>{
  setIsLoggedIn(false)
 }


  return (
    <div>
        {isLoggedIn ?<Nav logout={logout} />  :null}
        <LoginContext value={login}>
 <Main isLoggedIn={isLoggedIn} />
        </LoginContext>
     
    </div>
  )
}

export default App