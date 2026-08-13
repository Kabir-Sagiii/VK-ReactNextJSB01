import {useReducer} from 'react'
import "./Counter.css"

function myReducer(state,action){
    let data;
// logic to update the state
   if(action.type==="inc"){
 data = state + action.value
   } else if(action.type==="dec") {
    data = state - 1
} else if(action.type==="reset") {
    data = 0
}
  return data
}

function Counter() {
    const [state,dispatch] = useReducer(myReducer,0)
  return (
    <div className='counter'>
        <h1>Count Value : {state}</h1>

        <button onClick={()=>{
            dispatch({type:"inc",value:1}) //action object
        }}>incCount</button>

        <button onClick={()=>{
            dispatch({type:"inc",value : 3}) //action object
        }}>incCount by 3</button>

        <button onClick={()=>{
            dispatch({
                type:"dec"
            })
        }}>decCount</button>

        <button onClick={()=>{ 
            dispatch({type:"reset"})
        }}>Reset</button>

    </div>
  )
}

export default Counter