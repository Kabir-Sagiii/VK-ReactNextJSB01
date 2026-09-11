import React from 'react'
import { increment,decrement,reset } from '../../slices/counterSlice'
import {useDispatch,useSelector} from "react-redux"
function Counter() {
   const dispatch =  useDispatch()
      const data = useSelector((store)=>{
               return store.counterReducer
            })
  return (
    <div className="counter">
        <h1>Count Value is  : {data}</h1>
        <button onClick={()=>{
               const action = increment();
                 dispatch(action)
        }}>increase count</button>

        <button onClick={()=>{
              dispatch(decrement())
        }}>Decrement</button>

        <button onClick={()=>{
            dispatch(reset())
        }}>reset</button>
    </div>
  )
}

export default Counter