import {useState} from 'react'
import B from './B'
import NameContext from '../../../context/nameContext';
function A() {
    const [state,setState] = useState("MyContext");
    const [name,setName] = useState("Sagar")
  return (
    <div className='padding'>
        <h1>A Component</h1>
        <button onClick={()=>{
            setState("Data is Updated")
            setName("Kabir")
        }}>Update</button>

       <NameContext value={name}> 
        <B data={state} />
       </NameContext>

        <hr /> 
       
    </div>
  )
}

export default A