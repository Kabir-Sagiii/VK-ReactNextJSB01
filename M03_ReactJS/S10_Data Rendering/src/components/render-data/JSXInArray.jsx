import {useState} from 'react'

function JSXInArray() {
    const [state,setState] = useState([<input />,<h3>i am h3</h3>])
  return (
    <div>
        <h1>JSX Elements in Array</h1>
        {state}
    </div>
  )
}

export default JSXInArray