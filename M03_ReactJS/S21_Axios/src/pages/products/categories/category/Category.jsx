import React from 'react'
import "./Category.css"
function Category({label,checked}) {
  return (
    <div className='category'>
          
            <input id={label} defaultChecked={label==="all" ?checked : null} type="radio" name="category" />
              <label htmlFor={label}>{label}</label>
          </div>
  )
}

export default Category