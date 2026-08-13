import {useState,useRef} from 'react'
import "./Count.css"
function Count() {
    const [state,setState] = useState("Raj Verma")
    const countRef =useRef("Kabir") // countRef = {current : "Kabir"}
 
    var countValue = 0;

    const displayData = ()=>{
        console.log("variable value : ",countValue)

        console.log("state value : ", state);

        console.log("countRef Value : ", countRef.current)
    }

    const updateCountValue = ()=>{
          countValue++;

    }

    const updateMyState = ()=>{
        setState("Vaishnavi Sharma")
    }

    const updateRef = ()=>{
         countRef.current = "React JS Library"
    }

  return (
    <div className='count'>
        <h1>Count Value check in console :{state} </h1><br/>
        <button onClick={displayData} >Display</button>

        <button onClick={updateCountValue}>Update CountValue</button>
    
        <button onClick={updateMyState}>Update State</button>

        <button onClick={updateRef}>updateCountRefValue</button>
    </div>
  )
}

export default Count