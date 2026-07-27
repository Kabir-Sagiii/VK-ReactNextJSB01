import {useState} from 'react'

function Counter() {
    const [count,setCount]=useState(0);

    const incCount = ()=>{
        //  setCount(count + 1) // 0 + 1 = 1

        //  setCount(count+ 2) //0+2 = 2

        //  setCount(count + 1) //0 + 1 = 1

         setCount((prevCount)=>{return prevCount + 1}) //updater function
    
         setCount((prevCount)=>{return prevCount + 3})
        }

    const decCount = ()=>{

        setCount(count-1)
    }

  return (
    <div>
        <h1>Count Value : {count}</h1>
        <button onClick={incCount}>incCount {count}</button>
        <button onClick={decCount}>decCount {count}</button>
    </div>
  )
}

export default Counter