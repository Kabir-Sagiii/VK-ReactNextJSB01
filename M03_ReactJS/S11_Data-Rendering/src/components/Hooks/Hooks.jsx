import {useState} from 'react'
//  const [state,setState] = useState() invalid
function Hooks() {
const [state,setState] = useState()
    
const handleState = ()=>{
    // useState() invalid
}

  return (
    <div>
       {/* {useState()} invalid */}
        <h1>Rules of Hooks</h1>
        <button onClick={handleState}>submit</button>
    </div>
  )

   
}

export default Hooks