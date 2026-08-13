import {useRef} from 'react'
import "./Dom.css"
function Dom() {
             const h1Ref=useRef(null) //h1Ref = {current :null }
                                      // h1Ref = {current : h1DomElement}
  const update = ()=>{

       var h1DomElement= h1Ref.current;
       h1DomElement.style.color = "green"
       h1DomElement.innerText = "Dom Manipulation using Ref Concept"
       h1DomElement.remove()
  }
  
return (
    <div className='dom'>
        <h1 ref={h1Ref}>DOM concept with useRef</h1>
        <button onClick={update}>Update Content</button>
    </div>
  )
}

export default Dom