import {useState} from 'react'

function Map() {
    const [state,setState] = useState(["hyd","pune"])
  return (
    <div>
          <h1>Map </h1>
          <ol>
           {
             state.map(function(element,index){
                return (
                    <li>{element}</li>
                )
             })
           }
          </ol>
    </div>
  )
}

export default Map