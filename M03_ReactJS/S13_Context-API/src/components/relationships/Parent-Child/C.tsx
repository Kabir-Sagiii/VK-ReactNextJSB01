import {useContext} from 'react'
import NameContext from '../../../context/nameContext'
import D from './D'
function C({value}) {
     var x=  useContext(NameContext)
  return (
    <div className='padding'>
        <h1>C Component : {value} {x}</h1>
        <hr />
        <D />
    </div>
  )
}

export default C