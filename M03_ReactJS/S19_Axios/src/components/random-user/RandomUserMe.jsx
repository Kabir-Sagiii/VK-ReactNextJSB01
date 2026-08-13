import {useState} from 'react'
import axios from "axios"
import "./RandomUserMe.css"
function RandomUserMe() {
     const [user,setUser] = useState(null)

    const getUsers = ()=>{
        axios.get("https://randomuser.me/api/?results=50")
        .then((res)=>{
           console.log(res)
           setUser(res.data.results)
        }).catch((error)=>{
            console.log(error)
            alert("Failed to Access User data")
        })
    }

  return (
    <div className='random-user'>
        <h1>Random User Names</h1>
        <button onClick={getUsers}>Get Users Data</button>
        <ol>
            {
                user!==null ? 
                    user.map(function(element){
                        return <li>{element.name.first} {element.name.last}</li>
                    })
                : <h1 id="no-data">No User data</h1>
            }
        </ol>
    </div>
  )
}

export default RandomUserMe