import React from 'react'
import C from './C'
function B({data}) {
  return (
    <div className='padding'>
        <h1>B Component: {data} </h1>
        <hr /> 
        <C value={data}/>
    </div>
  )
}

export default B