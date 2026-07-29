import {useContext} from 'react'
import NameContext from '../../../context/nameContext'

function D() {
    const data= useContext(NameContext)
  return (
    <div>
        <h1>D Component : <span className='name'>Name : {data}</span></h1>
    </div>
  )
}

export default D