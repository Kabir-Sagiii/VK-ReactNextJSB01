import {useState} from 'react'

function RenderingData() {
    let [state,setState] = useState([10,20,30,40,"sagar",true])
  return (
    <div>
        <h1>Rendering Data : {state}</h1>
    </div>
  )
}

export default RenderingData